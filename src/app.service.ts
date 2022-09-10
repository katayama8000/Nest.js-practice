import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  get100(): string {
    return 'Continue';
  }

  get101(): string {
    return 'Switching Protocols';
  }

  get102(): string {
    return 'Processing';
  }

  get200(): string {
    return 'OK';
  }

  get201(): string {
    return 'Created';
  }

  get202(): string {
    return 'Accepted';
  }

  get203(): string {
    return 'Non-Authoritative Information';
  }

  get204(): string {
    return 'No Content';
  }

  get205(): string {
    return 'Reset Content';
  }

  get206(): string {
    return 'Partial Content';
  }

  get207(): string {
    return 'Multi-Status';
  }

  get300(): string {
    return 'Multiple Choices';
  }

  get301(): string {
    return 'Moved Permanently';
  }

  get302(): string {
    return 'Found';
  }

  get303(): string {
    return 'See Other';
  }

  get304(): string {
    return 'Not Modified';
  }

  get305(): string {
    return 'Use Proxy';
  }

  get306(): string {
    return 'Switch Proxy';
  }

  get307(): string {
    return 'Temporary Redirect';
  }

  get308(): string {
    return 'Permanent Redirect';
  }

  get400(): string {
    return 'Bad Request';
  }

  get401(): string {
    return 'Unauthorized';
  }

  get402(): string {
    return 'Payment Required';
  }

  get403(): string {
    return 'Forbidden';
  }

  get404(): string {
    return 'Not Found';
  }

  get405(): string {
    return 'Method Not Allowed';
  }

  get406(): string {
    return 'Not Acceptable';
  }

  get407(): string {
    return 'Proxy Authentication Required';
  }

  get408(): string {
    return 'Request Timeout';
  }

  get409(): string {
    return 'Conflict';
  }

  get410(): string {
    return 'Gone';
  }

  get411(): string {
    return 'Length Required';
  }

  get412(): string {
    return 'Precondition Failed';
  }

  get413(): string {
    return 'Payload Too Large';
  }

  get414(): string {
    return 'URI Too Long';
  }

  get415(): string {
    return 'Unsupported Media Type';
  }

  get416(): string {
    return 'Range Not Satisfiable';
  }

  get417(): string {
    return 'Expectation Failed';
  }

  get418(): string {
    return "I'm a teapot";
  }

  get421(): string {
    return 'Misdirected Request';
  }

  get422(): string {
    return 'Unprocessable Entity';
  }

  get423(): string {
    return 'Locked';
  }

  get424(): string {
    return 'Failed Dependency';
  }

  get426(): string {
    return 'Upgrade Required';
  }
}
