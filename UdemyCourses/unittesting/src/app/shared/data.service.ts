export class DataService {
  get Details(): Promise<any>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data');
      }, 1500);
    });
  }
}
