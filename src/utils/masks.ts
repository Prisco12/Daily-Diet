// Função para formatar datas no formato dd/mm/yyyy
function dateMask(value: string): string {
    // Remove tudo que não for número
    value = value.replace(/\D/g, "");

    // Formata o valor com regex para dd/mm/yyyy
    const formatted = value.replace(
        /^(\d{0,2})(\d{0,2})(\d{0,4})$/,
        (_, day, month, year) => {
            let result = "";
            if (day) result += day;
            if (month) result += "/" + month;
            if (year) result += "/" + year;
            return result;
        }
    );

    // Retorna a data formatada, garantindo o tamanho máximo
    return formatted.slice(0, 10);
}

// Função para formatar horas no formato HH:mm
function hourMask(value: string): string {
    // Remove tudo que não for número
    value = value.replace(/\D/g, "");

    // Formata o valor com regex para HH:mm
    const formatted = value.replace(
        /^(\d{0,2})(\d{0,2})$/,
        (_, hour, minute) => {
            let result = "";
            if (hour) result += hour;
            if (minute) result += ":" + minute;
            return result;
        }
    );

    // Retorna a hora formatada, garantindo o tamanho máximo
    return formatted.slice(0, 5);
}

export { dateMask, hourMask };
