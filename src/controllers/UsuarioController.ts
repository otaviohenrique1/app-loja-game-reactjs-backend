import { Request, Response } from "express";
import { getConnection, getRepository } from "typeorm";
import * as Yup from "yup";
import Usuarios from "../entity/Usuarios";
import usuarioView from "../views/UsuarioView";

export default {
  async login(request: Request, response: Response) {
    const { email, senha } = request.body;
    let existingUser: any;
    const usuarioRepository = getRepository(Usuarios);
    try {
      existingUser = await usuarioRepository.findOne({ email: email });
    } catch (error) {
      const mensagemErro = "Login falhou, tente novamente mais tarde";
      return response.status(500).json({ message: mensagemErro });
    }
    if (!existingUser || existingUser.senha !== senha) {
      const mensagemErro = "Dados invalidos";
      // console.log(`${email}, ${senha}`);
      return response.status(401).json({ message: mensagemErro });
    }
    let data_user = {
      id: existingUser.id,
      nome: existingUser.nome,
      perfil: existingUser.perfil,
      email: existingUser.email,
    };
    return response.status(200).json({ message: "Logado com sucesso!", data_user });
  },
  async index(request: Request, response: Response) {
    const usuarioRepository = getRepository(Usuarios);
    const usuario = await usuarioRepository.find();
    return response.json(usuarioView.renderMany(usuario));
  },
  async show(request: Request, response: Response) {
    const { id } = request.params;
    const usuarioRepository = getRepository(Usuarios);
    const usuario = await usuarioRepository.findOneOrFail(id);
    return response.json(usuarioView.render(usuario));
  },
  async create(request: Request, response: Response) {
    const { nome, perfil, email, senha, sexo, data_nascimento, pais,
      cidade, estado, resumo, celular, url_personalizado, data_cadastro } = request.body;
    
    const usuarioRepository = getRepository(Usuarios);

    const data = { nome, perfil, email, senha, sexo, data_nascimento, pais,
      cidade, estado, resumo, celular, url_personalizado, data_cadastro };
    
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      perfil: Yup.string().required(),
      email: Yup.string().required(),
      senha: Yup.string().required(),
      sexo: Yup.string().required(),
      data_nascimento: Yup.date().required(),
      pais: Yup.string().required(),
      cidade: Yup.string().required(),
      estado: Yup.string().required(),
      resumo: Yup.string().required(),
      celular: Yup.string().required(),
      url_personalizado: Yup.string().required(),
      data_cadastro: Yup.date().required()
    });
    
    await schema.validate(data, {
      abortEarly: false
    });
    
    const usuario = usuarioRepository.create(data);
    
    await usuarioRepository.save(usuario);
    
    return response.status(201).json(usuario);
  },
  async delete(request: Request, response: Response) {
    const { id } = request.params;
    const usuarioRepository = getRepository(Usuarios);
    const usuario = await usuarioRepository.delete(id);
    return response.status(200).json(usuario);
  },
  async update(request: Request, response: Response) {
    const { id, nome, perfil, email, senha, sexo, data_nascimento, pais, cidade, estado, resumo, celular, url_personalizado } = request.body;
    const usuarioRepository = getRepository(Usuarios);
    const data = { nome, perfil, email, senha, sexo, data_nascimento, pais, cidade, estado, resumo, celular, url_personalizado };
    const schema = Yup.object().shape({
      nome: Yup.string().required('Campo nome esta invalido'),
      perfil: Yup.string().required('Campo perfil esta invalido'),
      email: Yup.string().required('Campo email esta invalido'),
      senha: Yup.string().required('Campo senha esta invalido'),
      sexo: Yup.string().required('Campo sexo esta invalido'),
      data_nascimento: Yup.date().required('Campo data_nascimento esta invalido'),
      pais: Yup.string().required('Campo pais esta invalido'),
      cidade: Yup.string().required('Campo cidade esta invalido'),
      estado: Yup.string().required('Campo estado esta invalido'),
      resumo: Yup.string().required('Campo resumo esta invalido'),
      celular: Yup.string().required('Campo celular esta invalido'),
      url_personalizado: Yup.string().required('Campo url_personalizado esta invalido'),
    });
    await schema.validate(data, {
      abortEarly: false
    });
    const usuario = await usuarioRepository.update(id, data);
    return response.status(201).json(usuario);
  },
  // async update2(request: Request, response: Response) {
  //   const { id, nome, perfil, email, senha, sexo, data_nascimento, pais, cidade, estado, resumo, celular, url_personalizado } = request.body;
  //   const usuarioRepository = getRepository(Usuarios);
  //   const data = { nome, perfil, email, senha, sexo, data_nascimento, pais, cidade, estado, resumo, celular, url_personalizado };
  //   const schema = Yup.object().shape({
  //     nome: Yup.string().required(),
  //     perfil: Yup.string().required(),
  //     email: Yup.string().required(),
  //     senha: Yup.string().required(),
  //     sexo: Yup.string().required(),
  //     data_nascimento: Yup.date().required(),
  //     pais: Yup.string().required(),
  //     cidade: Yup.string().required(),
  //     estado: Yup.string().required(),
  //     resumo: Yup.string().required(),
  //     celular: Yup.string().required(),
  //     url_personalizado: Yup.string().required(),
  //   });
  //   await schema.validate(data, {
  //     abortEarly: false
  //   });
  //   const usuario = await usuarioRepository.update(id, data);
  //   return response.status(201).json(usuario);
  // },
  // async update3(request: Request, response: Response) {
  //   const { id, nome, perfil, email, senha, sexo, data_nascimento, pais, cidade, estado, resumo, celular, url_personalizado } = request.body;
  //   const data = { nome, perfil, email, senha, sexo, data_nascimento, pais, cidade, estado, resumo, celular, url_personalizado };
  //   const schema = Yup.object().shape({
  //     nome: Yup.string().required('Campo nome esta invalido'),
  //     perfil: Yup.string().required('Campo perfil esta invalido'),
  //     email: Yup.string().required('Campo email esta invalido'),
  //     senha: Yup.string().required('Campo senha esta invalido'),
  //     sexo: Yup.string().required('Campo sexo esta invalido'),
  //     data_nascimento: Yup.date().required('Campo data_nascimento esta invalido'),
  //     pais: Yup.string().required('Campo pais esta invalido'),
  //     cidade: Yup.string().required('Campo cidade esta invalido'),
  //     estado: Yup.string().required('Campo estado esta invalido'),
  //     resumo: Yup.string().required('Campo resumo esta invalido'),
  //     celular: Yup.string().required('Campo celular esta invalido'),
  //     url_personalizado: Yup.string().required('Campo url_personalizado esta invalido'),
  //   });

  //   await schema.validate(data, {
  //     abortEarly: false
  //   });

  //   const usuario = await getConnection()
  //     .createQueryBuilder()
  //     .update(Usuarios)
  //     .set(data)
  //     .where("id = :id", { id: id })
  //     .execute();
    
  //   return response.status(201).json(usuario);
  // },
  // async update4(request: Request, response: Response) {
  //   const { id, nome, perfil, email, senha, sexo, data_nascimento, pais, cidade, estado, resumo, celular, url_personalizado } = request.body;
  //   const data = { id, nome, perfil, email, senha, sexo, data_nascimento, pais, cidade, estado, resumo, celular, url_personalizado };
  //   console.log(data);
  //   return response.status(201);
  // },
};