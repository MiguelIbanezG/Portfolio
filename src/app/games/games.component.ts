import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild,
} from '@angular/core';

type Cell = { x: number; y: number };

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
})
export class GamesComponent implements AfterViewInit, OnDestroy {
  @ViewChild('board', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;

  // Tablero y juego
  readonly tileCount = 20;
  readonly tileSize = 24; // tamaño “lógico” de cada celda (se escala por DPR para que se vea nítido)
  private dpr = Math.max(1, window.devicePixelRatio || 1);

  private snake: Cell[] = [];
  private dir: Cell = { x: 1, y: 0 };
  private nextDir: Cell = { x: 1, y: 0 };
  private food: Cell = { x: 10, y: 10 };

  // Estado
  score = 0;
  highScore = 0;
  running = false;
  paused = false;
  gameOver = false;

  // Loop
  private rafId: number | null = null;
  private lastTime = 0;
  private moveIntervalMs = 120; // velocidad (ms por movimiento). Más bajo = más rápido.
  private accumulator = 0;

  ngAfterViewInit(): void {
    this.ctx = this.canvasRef.nativeElement.getContext('2d') as CanvasRenderingContext2D;
    this.readHighScore();
    this.setupCanvas();
    this.resetGame(false);
    this.render(); // dibuja estado inicial
  }

  ngOnDestroy(): void {
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
  }

  // ========= Inicialización y layout =========
  private setupCanvas() {
    const canvas = this.canvasRef.nativeElement;
    const logicalW = this.tileCount * this.tileSize;
    const logicalH = this.tileCount * this.tileSize;

    // Asigna tamaño real (pixeles) y estilo (CSS)
    canvas.width = Math.floor(logicalW * this.dpr);
    canvas.height = Math.floor(logicalH * this.dpr);
    canvas.style.width = logicalW + 'px';
    canvas.style.height = logicalH + 'px';

    // Escala el contexto para que 1 unidad = 1 “pixel lógico”
    this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
  }

  @HostListener('window:resize')
  onResize() {
    const newDpr = Math.max(1, window.devicePixelRatio || 1);
    if (newDpr !== this.dpr) {
      this.dpr = newDpr;
      this.setupCanvas();
      this.render();
    }
  }

  // ========= Controles =========
  @HostListener('window:keydown', ['$event'])
  handleKey(e: KeyboardEvent) {
    if (['ArrowUp', 'KeyW'].includes(e.code)) this.queueDirection(0, -1);
    else if (['ArrowDown', 'KeyS'].includes(e.code)) this.queueDirection(0, 1);
    else if (['ArrowLeft', 'KeyA'].includes(e.code)) this.queueDirection(-1, 0);
    else if (['ArrowRight', 'KeyD'].includes(e.code)) this.queueDirection(1, 0);
    else if (e.code === 'Space') this.togglePause();
    else if (e.code === 'Enter' && (this.gameOver || !this.running)) this.start();
  }

  queueDirection(x: number, y: number) {
    // Evita girar 180º directo
    if (this.dir.x + x === 0 && this.dir.y + y === 0) return;
    this.nextDir = { x, y };
  }

  // ========= Botones UI =========
  start() {
    if (this.running && !this.gameOver) return;
    if (this.gameOver) this.resetGame();
    this.running = true;
    this.paused = false;
    this.lastTime = performance.now();
    this.accumulator = 0;
    this.loop(this.lastTime);
  }

  togglePause() {
    if (!this.running || this.gameOver) return;
    this.paused = !this.paused;
    if (!this.paused) {
      this.lastTime = performance.now();
      this.loop(this.lastTime);
    } else if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  reset() {
    this.resetGame();
    this.render();
  }

  // ========= Lógica del juego =========
  private resetGame(preserveSpeed = true) {
    this.snake = [
      { x: 5, y: 10 },
      { x: 4, y: 10 },
      { x: 3, y: 10 },
    ];
    this.dir = { x: 1, y: 0 };
    this.nextDir = { x: 1, y: 0 };
    this.score = 0;
    this.gameOver = false;
    this.running = false;
    this.paused = false;
    if (!preserveSpeed) this.moveIntervalMs = 120;
    this.placeFood();
  }

  private placeFood() {
    while (true) {
      const fx = Math.floor(Math.random() * this.tileCount);
      const fy = Math.floor(Math.random() * this.tileCount);
      const onSnake = this.snake.some((c) => c.x === fx && c.y === fy);
      if (!onSnake) {
        this.food = { x: fx, y: fy };
        return;
      }
    }
  }

  private loop = (time: number) => {
    if (!this.running || this.paused) return;

    const delta = time - this.lastTime;
    this.lastTime = time;
    this.accumulator += delta;

    while (this.accumulator >= this.moveIntervalMs) {
      this.accumulator -= this.moveIntervalMs;
      this.step(); // avanza un “tick” de juego
    }

    this.render();
    this.rafId = requestAnimationFrame(this.loop);
  };

  private step() {
    // Aplica dirección encolada (evita 180º ya controlado)
    this.dir = this.nextDir;

    const head = this.snake[0];
    const newHead: Cell = { x: head.x + this.dir.x, y: head.y + this.dir.y };

    // Choque con paredes
    if (
      newHead.x < 0 ||
      newHead.y < 0 ||
      newHead.x >= this.tileCount ||
      newHead.y >= this.tileCount
    ) {
      this.endGame();
      return;
    }

    // Choque con uno mismo
    if (this.snake.some((c) => c.x === newHead.x && c.y === newHead.y)) {
      this.endGame();
      return;
    }

    // Avanza
    this.snake.unshift(newHead);

    // ¿Come?
    if (newHead.x === this.food.x && newHead.y === this.food.y) {
      this.score += 10;
      this.speedUpSlightly();
      this.updateHighScore();
      this.placeFood();
    } else {
      this.snake.pop(); // mueve cola
    }
  }

  private endGame() {
    this.gameOver = true;
    this.running = false;
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  private speedUpSlightly() {
    // acelera un poco, con límite inferior
    this.moveIntervalMs = Math.max(60, this.moveIntervalMs - 3);
  }

  private readHighScore() {
    const raw = localStorage.getItem('snake_highscore');
    this.highScore = raw ? +raw : 0;
  }

  private updateHighScore() {
    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem('snake_highscore', String(this.highScore));
    }
  }

  // ========= Render =========
  private render() {
    const ctx = this.ctx;
    const W = this.tileCount * this.tileSize;
    const H = this.tileCount * this.tileSize;

    // Fondo
    ctx.fillStyle = '#111';
    ctx.fillRect(0, 0, W, H);

    // Cuadrícula suave
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    for (let i = 1; i < this.tileCount; i++) {
      const p = i * this.tileSize;
      ctx.beginPath();
      ctx.moveTo(p, 0);
      ctx.lineTo(p, H);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, p);
      ctx.lineTo(W, p);
      ctx.stroke();
    }

    // Comida
    this.drawCell(this.food, '#e91e63', 6);

    // Serpiente (cabeza más brillante)
    this.snake.forEach((c, i) => {
      const shade = 200 - Math.min(i * 6, 120);
      const color = i === 0 ? '#4caf50' : `rgb(${shade},255,${shade})`;
      this.drawCell(c, color, 4);
    });

    if (this.gameOver) {
      this.drawOverlayText('GAME OVER', 'Pulsa Enter para reiniciar');
    } else if (!this.running) {
      this.drawOverlayText('SNAKE', 'Pulsa Enter para empezar');
    } else if (this.paused) {
      this.drawOverlayText('PAUSA', 'Pulsa Espacio para continuar');
    }
  }

  private drawCell(c: Cell, color: string, radius = 4) {
    const x = c.x * this.tileSize;
    const y = c.y * this.tileSize;
    const s = this.tileSize;

    this.ctx.fillStyle = color;
    this.roundRect(this.ctx, x + 1, y + 1, s - 2, s - 2, radius);
    this.ctx.fill();
  }

  private roundRect(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    w: number,
    h: number,
    r: number
  ) {
    const rr = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + rr, y);
    ctx.arcTo(x + w, y, x + w, y + h, rr);
    ctx.arcTo(x + w, y + h, x, y + h, rr);
    ctx.arcTo(x, y + h, x, y, rr);
    ctx.arcTo(x, y, x + w, y, rr);
    ctx.closePath();
  }

  private drawOverlayText(title: string, subtitle: string) {
    const centerX = (this.tileCount * this.tileSize) / 2;
    const centerY = (this.tileCount * this.tileSize) / 2;

    this.ctx.fillStyle = 'rgba(0,0,0,0.5)';
    this.ctx.fillRect(0, centerY - 70, this.tileCount * this.tileSize, 120);

    this.ctx.fillStyle = '#fff';
    this.ctx.font = 'bold 28px system-ui, -apple-system, Segoe UI, Roboto, Arial';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(title, centerX, centerY - 20);

    this.ctx.font = '16px system-ui, -apple-system, Segoe UI, Roboto, Arial';
    this.ctx.fillText(subtitle, centerX, centerY + 14);
  }

  // ========= Controles táctiles (móvil) =========
  onTouch(dir: 'up' | 'down' | 'left' | 'right') {
    if (dir === 'up') this.queueDirection(0, -1);
    else if (dir === 'down') this.queueDirection(0, 1);
    else if (dir === 'left') this.queueDirection(-1, 0);
    else if (dir === 'right') this.queueDirection(1, 0);
  }

  
}
