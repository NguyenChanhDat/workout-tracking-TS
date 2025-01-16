export function InsertSetData(){
    return `
        USE LocalDatabase
        INSERT INTO [Sets] ([PlanId], [exerciseId], [weight], [reps], [restTime])
        VALUES 
        (1, 1, 50, 12, 60),
        (1, 5, 30, 15, 45),
        (2, 2, 100, 8, 120), 
        (2, 4, 0, 10, 90), 
        (3, 3, 80, 10, 90); 
`
}