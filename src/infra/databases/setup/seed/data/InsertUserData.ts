export function InsertUserData(){
    return `
        USE LocalDatabase
        INSERT INTO Users(username, password)
        values ('datnguyen', 'dat20112011@'),
        ('johncena', 'bingChilling%^$'),
        ('randyorton', 'viper@@')
    `
}