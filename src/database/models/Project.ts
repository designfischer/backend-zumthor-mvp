import mongoose from 'mongoose'

interface IProjectModel extends mongoose.Document {
    user: string,
    category: string,
    thumbnail: string,
    score?: number,
    type_interior: number,
    type_transition: number,
    type_exterior: number
    size_big: number,
    size_small: number,
    size_medium: number,
    ceiling_low: number,
    ceiling_medium: number,
    ceiling_high: number,
    ceiling_none: number,
    material_natural: number,
    material_mixed: number,
    material_artificial: number,
    color_red: number,
    color_green: number,
    color_blue: number,
    color_white: number,
    color_black: number,
    tone_pastel: number,
    tone_grey: number,
    tone_vivid: number,
    limit_open: number,
    limit_semi: number,
    limit_closed: number,
    population_dense: number,
    population_medium: number,
    population_low: number,
    furniture_high: number,
    furniture_medium: number,
    furniture_low: number,
    operation_day: number,
    operation_night: number,
    light_high: number,
    light_medium: number,
    light_low: number 
}

const Schema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    category: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    score: Number,
    type_interior: {
        type: Number,
        required: true
    },
    type_transition: {
        type: Number,
        required: true
    },
    type_exterior: {
        type: Number,
        required: true
    },
    size_big: {
        type: Number,
        required: true
    },
    size_small: {
        type: Number,
        required: true
    },
    size_medium: {
        type: Number,
        required: true
    },
    ceiling_low: {
        type: Number,
        required: true
    },
    ceiling_medium: {
        type: Number,
        required: true
    },
    ceiling_high: {
        type: Number,
        required: true
    },
    ceiling_none: {
        type: Number,
        required: true
    },
    material_natural: {
        type: Number,
        required: true
    },
    material_mixed: {
        type: Number,
        required: true
    },
    material_artificial: {
        type: Number,
        required: true
    },
    color_red: {
        type: Number,
        required: true
    },
    color_green: {
        type: Number,
        required: true
    },
    color_blue: {
        type: Number,
        required: true
    },
    color_white: {
        type: Number,
        required: true
    },
    color_black: {
        type: Number,
        required: true
    },
    tone_pastel: {
        type: Number,
        required: true
    },
    tone_grey: {
        type: Number,
        required: true
    },
    tone_vivid: {
        type: Number,
        required: true
    },
    limit_open: {
        type: Number,
        required: true
    },
    limit_semi: {
        type: Number,
        required: true
    },
    limit_closed: {
        type: Number,
        required: true
    },
    population_dense: {
        type: Number,
        required: true
    },
    population_medium: {
        type: Number,
        required: true
    },
    population_low: {
        type: Number,
        required: true
    },
    furniture_high: {
        type: Number,
        required: true
    },
    furniture_medium: {
        type: Number,
        required: true
    },
    furniture_low: {
        type: Number,
        required: true
    },
    operation_day: {
        type: Number,
        required: true
    },
    operation_night: {
        type: Number,
        required: true
    },
    light_high: {
        type: Number,
        required: true
    },
    light_medium: {
        type: Number,
        required: true
    },
    light_low: {
        type: Number,
        required: true
    } 
})

export default mongoose.model<IProjectModel>('Project', Schema)