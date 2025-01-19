export function InsertPlanData(){
    return `--sql
        USE LocalDatabase
        INSERT INTO [Plans] ([userId], [name], [membershipTier])
        VALUES 
        (1, 'Weight Loss Plan', 'Basic'),
        (2, 'Strength Training Plan', 'Advance'),
        (3, 'Bodybuilding Plan', 'High');
    `
}