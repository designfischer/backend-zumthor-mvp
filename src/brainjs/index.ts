import brain from 'brain.js'

const net = new brain.NeuralNetwork()

export async function calculateProjectScore(references: IProjectBrain[], project: IProjectBrain) { 
    const formattedProject = formatFeaturesToBrainJS(project)   
    const formattedFeatures = formatFeaturesArray(references)    
    
    net.train(formattedFeatures)

    const prediction = net.run(formattedProject.input)
    const formattedPrediction = convertToIntegerValues(prediction[0])

    return formattedPrediction
}

function convertToDecimals(number: number) {
    return number * 0.1
}

function convertToIntegerValues(number: number) {
    return number * 10
}

function formatFeaturesArray(references: IProjectBrain[]) {
    const formattedFeatures = references.map(reference => formatFeaturesToBrainJS(reference))
    return formattedFeatures
}

function formatFeaturesToBrainJS(reference: IProjectBrain) {
    const formattedFeature = {
        input: [
            reference.type_interior,
            reference.type_transition,
            reference.type_exterior,
            reference.size_big,
            reference.size_medium,
            reference.size_small,
            reference.ceiling_high,
            reference.ceiling_medium,
            reference.ceiling_low,
            reference.ceiling_none,
            reference.material_natural,
            reference.material_mixed,
            reference.material_artificial,
            reference.color_red,
            reference.color_green,
            reference.color_blue,
            reference.color_white,
            reference.color_black,
            reference.tone_pastel,
            reference.tone_grey,
            reference.tone_vivid,
            reference.limit_open,
            reference.limit_semi,
            reference.limit_closed,
            reference.population_low,
            reference.population_medium,
            reference.population_dense,
            reference.furniture_low,
            reference.furniture_medium,
            reference.furniture_high,
            reference.operation_day,
            reference.operation_night,
            reference.light_high,
            reference.light_medium,
            reference.light_low
        ],
        output: [convertToDecimals(reference.score!)]
    }
    return formattedFeature
}

