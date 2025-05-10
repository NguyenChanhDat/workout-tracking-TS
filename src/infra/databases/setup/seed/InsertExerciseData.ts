export function InsertExerciseData(){
    return `--sql
        USE LocalDatabase
        INSERT INTO [Exercises] ([name], [imageUrl], [targetMuscle1], [targetMuscle2], [targetMuscle3])
        VALUES 
        ('Squats', 'https://example.com/squats.jpg', 'Quads', 'Glutes', NULL),
        ('Deadlift', 'https://example.com/deadlift.jpg', 'Back', 'Hamstring', 'Glutes'),
        ('Bench Press', 'https://example.com/benchpress.jpg', 'Chest', 'Shoulders', 'Triceps'),
        ('Pull-Ups', 'https://example.com/pullups.jpg', 'Back', 'Biceps', NULL),
        ('Lunges', 'https://example.com/lunges.jpg', 'Quads', 'Glutes', NULL);
`
}