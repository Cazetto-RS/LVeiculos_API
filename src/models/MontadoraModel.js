import pool from "../database/data.js";

export const cadastrar = async (montadora) => {
    // Obter uma conexão do pool
    const cx = await pool.getConnection();
    try {
        // Desestruturar o objeto veiculo
        const {
            nome,
            logotipo,
            data_cadastro,
            data_alteracao} = montadora;

        // Query para inserir um novo veículo
        const query = `INSERT INTO montadora (nome, logotipo, data_cadastro, data_alteracao) VALUES (?, ?, ?, ?)`;

        // Executar a query com os valores do veículo
        const [result] = await cx.query(query, [nome, logotipo, data_cadastro, data_alteracao]);

        // Verificar se a inserção foi bem-sucedida
        if (result.affectedRows === 0) {
            throw new Error("Erro ao cadastrar montadora");
        }
        // Retornar o ID do veículo inserido
        return result.insertId;
    } catch (error) {
        // Lançar o erro para ser tratado pelo chamador
        throw error;
    } finally {
        if (cx) {
            cx.release(); // Liberar a conexão de volta ao pool
        }
    }
}