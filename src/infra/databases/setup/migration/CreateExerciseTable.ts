export function CreateExerciseTable() {
    return `--sql
    USE LocalDatabase
        CREATE TABLE [Exercises] (
        [id] INTEGER NOT NULL IDENTITY UNIQUE,
        [name] NVARCHAR(MAX) NOT NULL,
        [imageUrl] NVARCHAR(MAX),
        [targetMuscle1] NVARCHAR(MAX) CHECK ([targetMuscle1] IN ('Quads', 'Hamstring', 'Calves', 'Glutes', 'Back', 'Chest', 'Shoulders', 'Triceps', 'Biceps', 'Traps')),
        [targetMuscle2] NVARCHAR(MAX) CHECK ([targetMuscle2] IN ('Quads', 'Hamstring', 'Calves', 'Glutes', 'Back', 'Chest', 'Shoulders', 'Triceps', 'Biceps', 'Traps')),
        [targetMuscle3] NVARCHAR(MAX) CHECK ([targetMuscle3] IN ('Quads', 'Hamstring', 'Calves', 'Glutes', 'Back', 'Chest', 'Shoulders', 'Triceps', 'Biceps', 'Traps')),
        PRIMARY KEY ([id])
    );
      `;
  }
  