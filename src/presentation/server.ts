import { MongoLogDatasource } from "../infraestructure/datasources/mongo-log.datasource";
import { LogRespositoryImpl } from "../infraestructure/repositories/log.repository.impl";
import { EmailService } from "./email/email.service";
import { PostgresLogDatasource } from "../infraestructure/datasources/postgres-log.datasource";
import { CronService } from "./cron/cron-service";
import { CheckServiceMultiple } from "../domain/use-cases/checks/check-service-multiple";
import { FileSystemDataSource } from "../infraestructure/datasources/file-system.datasource";

const fsLogRepository = new LogRespositoryImpl(
    new FileSystemDataSource()

);

const mongoLogRepository = new LogRespositoryImpl(
    new MongoLogDatasource(),

);

const postgresRepository = new LogRespositoryImpl(
    new PostgresLogDatasource()

);

const emailService = new EmailService();

export class Server {

    public static async start() {

        // CronService.createJob(
        //     '*/5 * * * * *',
        //     () => {
        //         const url = 'https://google.com';

        //         new CheckServiceMultiple(
        //             [
        //                 fsLogRepository,
        //                 mongoLogRepository,
        //                 postgresRepository
        //             ],
        //             () => console.log(`${url} is ok`),
        //             (error) => console.log(error),

        //         ).execute(url);
        //     }
        // );

    }

}
