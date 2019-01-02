

export class DataService {
    private msg: string;
    private msgClass : string;
    success(data) {
        this.msg = data;
        this.msgClass = 'success';
    }

    error(data) {
        this.msg = data;
        this.msgClass = 'danger';
    }

    warning(data) {
        this.msg = data;
        this.msgClass = 'warning';
    }

}