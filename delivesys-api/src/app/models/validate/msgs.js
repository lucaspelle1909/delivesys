function validaEan(numero) {
  var factor = 3;
  var sum = 0;
  var numlen = numero.length;
  var index = null;

  if (numlen == 13) {
    for (index = numero.length; index > 0; --index) {
      if (index != 13) {
        sum = sum + numero.substring(index - 1, index) * factor;
        factor = 4 - factor;
      }
    }
    var cc = (1000 - sum) % 10;
    var ca = numero.substring(12);
    if (cc == ca) {
      return true;
    } else {
      return "Digite um código EAN válido";
    }
  }

  if (numlen == 14) {
    for (index = numero.length; index > 0; --index) {
      if (index != 14) {
        sum = sum + numero.substring(index - 1, index) * factor;
        factor = 4 - factor;
      }
    }
    var cc = (1000 - sum) % 10;
    var ca = numero.substring(13);
    if (cc == ca) {
      return true;
    } else {
      return "Digite um código EAN válido";
    }
  }

  if (numlen == 8) {
    for (index = numero.length; index > 0; --index) {
      if (index != 8) {
        sum = sum + numero.substring(index - 1, index) * factor;
        factor = 4 - factor;
      }
    }
    var cc = (1000 - sum) % 10;
    var ca = numero.substring(7);
    if (cc == ca) {
      return true;
    } else {
      return "Digite um código EAN válido";
    }
  }

  if (numlen == 12) {
    for (index = numero.length; index > 0; --index) {
      if (index != 12) {
        sum = sum + numero.substring(index - 1, index) * factor;
        factor = 4 - factor;
      }
    }
    var cc = (1000 - sum) % 10;
    var ca = numero.substring(11);
    if (cc == ca) {
      return true;
    } else {
      return "Digite um código EAN válido";
    }
  }

  if (numlen != 8 && numlen != 12 && numlen != 13 && numlen != 14) {
    return "Digite um código EAN válido";
  }
}

export default {
  notEmpty: (fieldName) => ({ msg: `${fieldName} não pode ser vazio` }),
  notNull: (fieldName) => ({ msg: `${fieldName} não pode ser nulo` }),
  max: (max) => ({
    args: [0, max],
    msg: `Esse campo não pode passar de ${max} caracteres`,
  }),
  isIn: (args) => ({
    args: args,
    msg: `Esse campo só permite os seguintes valores: ${args.toString()}`,
  }),
  isEmail: () => ({ msg: "Email inválido" }),
  isUnique: (fieldName) => ({ msg: `${fieldName} já existente` }),
  isNumeric: (fieldName) => ({ msg: `${fieldName} aceita apenas números` }),
  CPF_CNPJ_INVALID: "Cpf ou cnpj inválido",
  PHONE: "Telefone ou celular inválido",
  validaEan,
};
