import { AbstractHandler } from "../AbstractHandler";
import { SystemErrorRecord } from "../../models/DataRecord";

const allowedLevels = ["info", "warning", "critical"];

export class LevelValidator extends AbstractHandler {
  protected process(record: SystemErrorRecord): SystemErrorRecord {
    if (!allowedLevels.includes(record.level)) {
      throw new Error("Invalid level");
    }
    return record;
  }
}
