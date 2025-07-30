import * as Categoria from '../models/CategoriaModel.js';

export const cadastrar = async (req, res) => {
    try {
        const categoria = req.body;

        // Verificar se o corpo da requisição contém os dados necessários
        if (!categoria || Object.keys(categoria).length === 0) {
            return res.status(400).json({
                success: false,
                status: 400,
                message: 'Dados do categoria não fornecidos'
            });
        }
        // Validar os dados do veículo
        if (!categoria.tipo || !categoria.icone || !categoria.data_cadastro || !categoria.data_cadastro) {
            return res.status(400).json({
                success: false,
                status: 400,
                message: 'Dados do categoria incompletos ou inválidos'
            });
        }
        const novCategoria = await Categoria.cadastrar(categoria);   
        res.status(201).json({
            success: true,
            status: 201,
            message: 'Veículo categoria com sucesso',
            veiculoId: novCategoria
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: 'Erro ao cadastrar categoria',
            error: error.message
        });
    }
};

export const consultar = async (req, res) => {
     res.status(200).json({
            success: true,
            status: 200,
            message: 'Em desenvolvimento'
        });
}
export const consultarTodos = async (req, res) => {
     res.status(200).json({
            success: true,
            status: 200,
            message: 'Em desenvolvimento'
        });
}