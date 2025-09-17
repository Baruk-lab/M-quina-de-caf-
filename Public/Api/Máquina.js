export default function handler(req, res) {
    const { tipo, agua } = req.query;
    res.status(200).json({
        mensagem: `Preparando ${tipo} com ${agua}ml de água... ☕ Café pronto!`
    });
}
