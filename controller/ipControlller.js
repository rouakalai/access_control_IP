const BTS = require("../model/ipModel");
const BlockedIP = require("../model/blockedIP");
exports.checkIP = async (req, res) => {
    try {
        const ip = req.body.ip;
        //vérifier si l'@ IP est bloquée
        const blocked = await BlockedIP.findOne({ip});
        if (blocked) {
            return res.status(403).json({message:"Cette adresse IP est bloquée"});
        }
        //vérifier si l'@ IP existe
        const bts = await BTS.findOne({ip});
        if (bts) {
            res.status(200).json({message:"Adresse IP existante"});
        }
        else {
            res.status(404).json({message:"Adresse IP non trouvée"});
        }
    }
        catch (error) {
            res.status(500).json({message: "Erreur interne du serveur" , error : error.message});
        }
        
};