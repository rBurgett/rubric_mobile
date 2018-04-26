export default class PrayerService {

    static async getDailyPrayers() {
        const res = await fetch('https://rubric.church/prayers?type=daily');
        const { data: prayers } = await res.json();
        return prayers;
    }

    static async getDailyPrayer(time) {
        const res = await fetch(`https://rubric.church/prayers?time=${time}`);
        const { data: prayers } = await res.json();
        return prayers[0];
    }

}
