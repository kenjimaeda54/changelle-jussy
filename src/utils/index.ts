export function formatDate(result: string): string {
  const date = result.split('T')[0];
  const prepareFormatDate = date.split('-');
  const formateDate = `${prepareFormatDate[2]}/${prepareFormatDate[1]}/${prepareFormatDate[0]}`;
  return formateDate;
}

export function getSex(sex: string): string {
  switch (sex) {
    case 'male':
      return 'Masculino';
    case 'female':
      return 'Feminino';
    default:
      return 'Não encontrou país encontrou sexo';
  }
}

export function getInitialsCountry(newCountry: string): string {
  const country = {
    au: /Austria/gi,
    br: /(Brazil)|(Brasil)/gi,
    ca: /Canada/gi,
    ch: /Suica/gi,
    de: /Alemanha/gi,
    es: /Espanha/gi,
    fr: /Franca/gi,
    ira: /Ira/gi,
    dk: /Dinamarca/gi,
    fi: /Finlandia/gi,
    no: /Noruega/gi,
    ie: /Irlanda/gi,
    nl: /Holanda/gi,
    nz: /Nova Zelandia/gi,
    tr: /Turquia/gi,
    us: /Estados Unidos/gi,
    gb: /Reino Unido/gi,
  } as { [key: string]: RegExp };
  function getCountry(input: string) {
    for (const key in country) {
      if (country[key].test(input)) {
        return key;
      }
    }
    return '';
  }
  return getCountry(newCountry);
}

export type Results = {
  gender: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: {
      name: string;
      number: number;
    };
    city: string;
    state: string;
    postcode: string;
    country: string;
  };
  email: string;
  login: {
    uuid: string;
  };
  id: {
    value: string;
  };
  dob: {
    date: string;
  };
  phone: string;
  cell: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  nat: string;
};
