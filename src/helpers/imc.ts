export type Level = {
    title: string;
    color: string;
    icon: "down" | "up";
    imc: number[];
    yourImc?: number;
}

export const levels: Level[] = [
    { title: "Magreza", color: "#96A3AB", icon: "down", imc: [0, 18.59] },
    { title: "Normal", color: "#0EAD69", icon: "up", imc: [18.60, 24.99] },
    { title: "Sobrepeso", color: "#E2B039", icon: "down", imc: [25, 30.99] },
    { title: "Obesidade", color: "#C3423F", icon: "down", imc: [31, 99.99] },

]

export const calcImc = (height: number, weight: number) => {
    const imc = (weight / (height * height));


    for (let i in levels) {
        if (imc >= levels[i].imc[0] && imc <= levels[i].imc[1]) {
            let levelsCopy: Level = { ...levels[i] };
            levelsCopy.yourImc = parseFloat(imc.toFixed(3));
            return levelsCopy;
        }
    }
    return null;
}