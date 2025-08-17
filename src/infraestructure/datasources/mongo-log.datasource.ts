import { LogModel } from "../../data/mongo";
import { LogDataSource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";

export class MongoLogDatasource implements LogDataSource{
    
    async saveLog(log: LogEntity): Promise<void> {
      const newLog = await LogModel.create(log);
    //   await newLog.save();
      // console.log('Mongo Log created:', newLog.id );
    }

    async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {
       
        const logs = await LogModel.find({
            level: severityLevel
        });

        if (!logs ) throw new Error(`Cannnot get Logs`);


        return logs.map( mongoLog => LogEntity.fromObject(mongoLog) );
        //  return logs.map( LogEntity.fromObject ); This the same up

    }

}