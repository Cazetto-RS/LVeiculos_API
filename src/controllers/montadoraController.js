import * as Montadora from '../models/MontadoraModel.js';

export const cadastrar = async (req, res) => {
    try {
        const montadora = req.body;

        // Verificar se o corpo da requisição contém os dados necessários
        if (!montadora || Object.keys(montadora).length === 0) {
            return res.status(400).json({
                success: false,
                status: 400,
                message: 'Dados da montadora não fornecidos'
            });
        }
        // Validar os dados do veículo
        if (!montadora.nome || !montadora.logotipo || !montadora.data_cadastro || !montadora.data_alteracao) {
            return res.status(400).json({
                success: false,
                status: 400,
                message: 'Dados do montadora incompletos ou inválidos'
            });
        }
        const novMontadora = await Montadora.cadastrar(montadora);   
        res.status(201).json({
            success: true,
            status: 201,
            message: 'Veículo montadora com sucesso',
            veiculoId: novMontadora
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            status: 500,
            message: 'Erro ao cadastrar montadora',
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