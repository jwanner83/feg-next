class DateService {
  public getFormattedDate(date: Date) {
    const days = this.fillWithZero(date.getDate())
    const month = this.fillWithZero(date.getMonth())
    const year = date.getFullYear()

    return `${days}.${month}.${year}`
  }

  private fillWithZero(number: number): string {
    return number > 9 ? String(number) : '0' + number
  }
}

export const dateService = new DateService()
