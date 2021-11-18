class User {
  constructor({ id, name, email }) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  get initials() {
    const splitedName = this.name.split(" ");
    const firstLetters = splitedName
      .filter(Boolean)
      .map(name => name[0].toUpperCase());

    if (firstLetters.length < 3) {
      return firstLetters.join("");
    }

    const first = firstLetters[0];
    const last = firstLetters.slice(-1);

    return `${first}${last}`;
  }
}

module.exports = User;
