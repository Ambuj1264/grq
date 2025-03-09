// Src/core/logger/logger.service.ts
import { Injectable, Logger } from '@nestjs/common';

/**
 *
 */
@Injectable()
export class LoggerService extends Logger {
  /**
   *
   * @param message
   * @param context
   */
  log(message: string, context?: string) {
    super.log(message, context);
  }

  /**
   *
   * @param message
   * @param trace
   * @param context
   */
  error(message: string, trace?: string, context?: string) {
    super.error(message, trace, context);
  }
}
