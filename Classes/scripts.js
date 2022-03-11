class Clock {

    timer;

    constructor({template}) {
        this.template = template
    }

    render() {
        let date = new Date();

        let hours = this.setTimeTemplate(date.getHours());
        let mins = this.setTimeTemplate(date.getMinutes());
        let secs = this.setTimeTemplate(date.getSeconds());

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        this.log(output);
    }

    setTimeTemplate(date) {
        return date < 10 ? '0' + date : date;
    }

    log(output) {
        console.log(output);
    }

    stop() {
        clearInterval(this.timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

const clock = new Clock({template: 'h:m:s'});
clock.start();
