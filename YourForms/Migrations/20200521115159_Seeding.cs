using Microsoft.EntityFrameworkCore.Migrations;

namespace YourForms.Migrations
{
    public partial class Seeding : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("INSERT INTO Profiles (Name, Surname, BirthDate, CreationDate, LastUpdate, Gender, Nationality, Phone, EmailAdress, IsActive) VALUES ('Anna', 'Kempa', '1997-02-15', '2020-01-13','2020-05-21', 0, 2,'83646487847', 'jhg@gmail.com',1)");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE FROM Profiles");
        }
    }
}
