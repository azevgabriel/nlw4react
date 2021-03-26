import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateAppointments1616689518708 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'appointments',
                columns:[
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'provider',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'date',
                        type: 'timestamp with time zone',
                        isNullable: false,
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('appointments')
    }

}

/*
    Linha do tempo:
    Primeira semana: Agendamentos
    Segunda seman: Usuário
    (New dev) Terceira semana: Agendamentos
    Quarta semana: Compras, sem atualizar os Agendamentos
*/