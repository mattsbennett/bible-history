import styles from './page.module.scss';

export default function Detail() {
    return (
        <main className={styles.main}>
            <header>
                <nav></nav>
            </header>
            <section className={styles.detail}>
                <h1 className={styles.heading}>Gezer Calendar</h1>
                <p>
                    This small inscribed limestone tablet was discovered in 1908 by R.A.S. Macalister in the ancient Israeli city of Gezer. The inscription is probably the oldest known example of Hebrew writing with a probable date from the 10th Century BC. This indicates that the inscription was written at a time when the Bible says Solomon was on the throne in Jerusalem - I Kings 9. The tablet is particularly interesting because there are traces of erasing and reuse on both front and back. We can surmise that it may have been a practice tablet for a young scribe 3,000 years ago. The content of the tablet lists agricultural activities and associates each with a number of months in the year. The importance of writing to this early Hebrew society is emphasized. The content of the stone tablet reminds us of the annual routine in a society based upon agriculture.
                </p>
            </section>
        </main>
    );
}
