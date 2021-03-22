class Complex {
    private real: number;
    private imaginary: number;

    constructor(real: number, imaginary: number) {
        this.real = real;
        this.imaginary = imaginary;

    }

    tostring() {
        console.log('RE:', this.real, ',', 'IM: ', this.imaginary, '\n')
    }

    add(obj: Complex): Complex {
        return new Complex(this.real + obj.real, this.imaginary + obj.imaginary)
    }

    subtract(obj: Complex): Complex {
        return new Complex(this.real - obj.real, this.imaginary - obj.imaginary)
    }

    modulo(): number {
        return Math.sqrt((this.real * this.real) + (this.imaginary * this.imaginary));
    }
}


let a = new Complex(2, 3);
let b = new Complex(5, 7);

console.log('A number: ')
a.tostring();

console.log('B number: ')
b.tostring();

let c = a.add(b);
console.log('a+b= c  ')
c.tostring();

let d = c.subtract(b)
console.log('c-b= d  ')
d.tostring();

console.log('mod(d) =   ')
let modResult = d.modulo();
console.log('Modulo result: ', modResult);
