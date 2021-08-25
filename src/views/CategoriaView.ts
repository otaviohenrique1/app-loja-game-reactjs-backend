import Categorias from "../entity/Categorias";

export default {
  render(categoria: Categorias) {
    return {
      id: categoria.id,
      nome: categoria.nome,
      data_cadastro: categoria.data_cadastro,
    };
  },
  renderMany(categorias: Categorias[]) {
    return categorias.map(usuario => this.render(usuario));
  }
};