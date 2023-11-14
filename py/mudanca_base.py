def inverter_numero(num: int) -> int:
    inverso = 0
    while num > 0:
        inverso = (inverso * 10) + (num % 10)
        num = num // 10
    return inverso


def decimal_para_base(num: int, base: int) -> list:
    resultado = []
    quociente = num
    resto = 0
    while quociente > 0:
        resto = quociente % base  # Resto de divisão
        quociente = quociente // base  # Divisão inteira
        resultado.insert(0, str(resto))  # Adicionar o resto ao *começo*
    return resultado


def base_para_decimal(num: list, base: int) -> int:
    decimal = 0
    for posição, coeficiente in enumerate(reversed(num)):
        decimal += int(coeficiente) * (base**posição)
    return decimal


def base_arbitraria(num: list, base: int, nova_base: int) -> list:
    A = base_para_decimal(num, base)
    B = decimal_para_base(A, nova_base)
    return B


def main():
    DEC = 34958
    B1 = 5
    N1 = decimal_para_base(DEC, B1)
    print(f"O número decimal {DEC} na base {B1} é {''.join(N1)}.")
    B2 = 8
    N2 = base_arbitraria(N1, B1, B2)
    print(f"O número {DEC} de base {B1} na base {B2} é {''.join(N2)}.")


main()
