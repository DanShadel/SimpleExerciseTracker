export class Set {
    constructor(name, reps, completedReps, weight, ratioBased, ratioAmount, trainingMax, amrap, completed) {
        this.name = name
        this.reps = reps
        this.completedReps = 0
        this.weight = weight
        this.ratioBased = ratioBased
        this.ratioAmount = ratioAmount
        this.trainingMax = trainingMax
        this.amrap = amrap
        this.completed = completed
    }

    toJson = () => {
        return {
            name: this.name,
            reps: this.reps,
            completedReps: this.completedReps,
            weight: this.weight,
            ratioBased: this.ratioBased,
            ratioAmount: this.ratioAmount,
            trainingMax: this.trainingMax,
            amrap: this.amrap,
            completed: this.completed,
        }
    }
}