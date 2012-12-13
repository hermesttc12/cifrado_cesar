describe("cifrado cesar", function(){
  describe("cifrando letras simples desplazando n posiciones del abecedario", function(){
    it("si la letra es 'a' y el desplazamiento es 2 entonces el cifrado es 'c'", function(){
      expect(cipher('a', 2)).toBe('c');
    });
    it("si la letra es 'a' y el desplazamiento es 4 entonces el cifrado es 'e'", function(){
      expect(cipher('a', 4)).toBe('e');
    });
    it("si la letra es 'x' y el desplazamiento es 4 entonces el cifrado es 'b'", function(){
      expect(cipher('x', 4)).toBe('b');
    });
    it("si no es una letra del abecedario devuelve lo mismo", function(){
      expect(cipher(' ', 4)).toBe(' ');
      expect(cipher(',', 4)).toBe(',');
      expect(cipher('0', 4)).toBe('0');
    });
  });
  describe("descifrando letras simples desplazando n posiciones hacia atras en el abecedario", function(){
    it("si la letra es 'a' y el desplazamiento es 2 entonces el descifrado es 'y'", function(){
      expect(decipher('a', 2)).toBe('y');
    });
    it("si la letra es 'a' y el desplazamiento es 4 entonces el descifrado es 'w'", function(){
      expect(decipher('a', 4)).toBe('w');
    });
    it("si la letra es 'x' y el desplazamiento es 4 entonces el descifrado es 't'", function(){
      expect(decipher('x', 4)).toBe('t');
    });
    it("si no es una letra del abecedario devuelve lo mismo", function(){
      expect(decipher(' ', 4)).toBe(' ');
      expect(decipher(',', 4)).toBe(',');
      expect(decipher('0', 4)).toBe('0');
    });
  })
  describe("cifrando palabras se aplica el algoritmo a cada letra", function(){
    it("cifrar 'abc' con desplazamiento 2 devuelve 'cde'", function(){
      expect(cipher('abc', 2)).toBe('cde');
    });
    it("cifrar 'xbj' con desplazamiento 5 devuelve 'cgo'", function(){
      expect(cipher('xbj', 5)).toBe('cgo');
    });
    it("cifrar 'hola que tal' con desplazamiento 2 devuelve 'jqnc swg vcn'", function(){
      expect(cipher('hola que tal', 2)).toBe('jqnc swg vcn');
    });
  });
  describe("descifrando palabras se aplica el algoritmo a cada letra", function(){
    it("descifrar 'abc' con desplazamiento 2 devuelve 'yza'", function(){
      expect(decipher('abc', 2)).toBe('yza');
    });
    it("descifrar 'xbj' con desplazamiento 5 devuelve 'swe'", function(){
      expect(decipher('xbj', 5)).toBe('swe');
    });
    it("descifrar 'hola que tal' con desplazamiento 2 devuelve 'fmjy osc ryj'", function(){
      expect(decipher('hola que tal', 2)).toBe('fmjy osc ryj');
    });
  });
});
