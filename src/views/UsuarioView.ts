import Usuarios from "../entity/Usuarios";

export default {
  render(usuario: Usuarios) {
    return {
      id: usuario.id,
      perfil: usuario.perfil,
      email: usuario.email,
      senha: usuario.senha,
      sexo: usuario.sexo,
      data_nascimento: usuario.data_nascimento,
      pais: usuario.pais,
      cidade: usuario.cidade,
      estado: usuario.estado,
      resumo: usuario.resumo,
      celular: usuario.celular,
      data_cadastro: usuario.data_cadastro,
    };
  },
  renderMany(usuarios: Usuarios[]) {
    return usuarios.map(usuario => this.render(usuario));
  }
};