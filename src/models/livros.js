import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Livro = sequelize.define('Livro', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    nome: { type: DataTypes.STRING(200), allowNull: false },
    autor: { type: DataTypes.STRING(100), allowNull: false },
    ano: { type: DataTypes.INTEGER, allowNull: false },
    editora: { type: DataTypes.STRING(100), allowNull: false },
    link_capa: {type: DataTypes.STRING(500), allowNull: true, defaultValue:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8lRbS7eKYzDq-Ftxc1p8G_TTw2unWBMEYUw&s"}
}, {
    tablename: 'LIVROS',
    timestamps: false
})

export default Livro;