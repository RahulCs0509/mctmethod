class MultiplicationTable {
    // Method to return the multiplication table of a given number
    static getTable(number, limit = 10) {
        let table = [];
        for (let i = 1; i <= limit; i++) {
            table.push(`${number} x ${i} = ${number * i}`);
        }
        return table;
    }
}
