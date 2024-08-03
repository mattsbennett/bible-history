import clsx from 'clsx'

import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>How we got our Bible</h1>
        <h2>A journey through time</h2>
      </section>
      <section className={styles.timeline}>
        <div className={styles.timelineComponent}>
          <div className={styles.timelineProgressOverlay}></div>
          <div className={styles.timelineProgress}>
            <div className={styles.timelineProgressBar}></div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineLeft}>
              <div className={styles.timelineDateText}>1000 BCE</div>
            </div>
            <div className={styles.timelineCentre}>
              <div className={styles.timelineCircle}></div>
            </div>
            <div className={styles.timelineRight}>
              <div className={styles.timelineText}>
                <h3>Gezer Calendar</h3>
                This small inscribed limestone tablet was discovered in 1908 by R.A.S. Macalister in
                the ancient Israeli city of Gezer. The inscription is probably the oldest known
                example of Hebrew writing with a probable date from the 10th Century BC. This
                indicates that the inscription was written at a time when the Bible says Solomon was
                on the throne in Jerusalem - I Kings 9. The tablet is particularly interesting
                because there are traces of erasing and reuse on both front and back. We can surmise
                that it may have been a practice tablet for a young scribe 3,000 years ago. The
                content of the tablet lists agricultural activities and associates each with a
                number of months in the year. The importance of writing to this early Hebrew society
                is emphasized. The content of the stone tablet reminds us of the annual routine in a
                society based upon agriculture.
              </div>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineLeft}>
              <div className={styles.timelineDateText}>700 BCE</div>
            </div>
            <div className={styles.timelineCentre}>
              <div className={styles.timelineCircle}></div>
            </div>
            <div className={styles.timelineRight}>
              <div className={styles.timelineText}>
                <h3>Tel Dan Stone</h3>
                Tel Dan is a biblical site in Northern Israel that has been excavated by the Israeli
                archaeologist Avraham Biran. The site has been identified with the biblical city of
                Dan, which was the northernmost city of ancient Israel. Large sections of middle
                bronze and iron age cities have been uncovered. In 1993, a reused building stone was
                discovered that contained ancient writing. lt was a triumphal inscription in
                Aramaic, chiselled into the black basalt stone. The king that the stone commemorates
                was probably Hazael, King of Damascus. It records, from the Aramean perspective, the
                turbulent politics that engulfed Israel during the 9th Century BC. In the
                inscription, written about 835 BC, Hazael claimed to have killed both the King of
                Israel and his ally, the King of the House of David. This is the first use of the
                name David from sources outside the Bible. The inscription was carved about 100
                years after David's time and, significantly, it identifies a line of kings descended
                from David. The Bible record is in II Kings. It and the inscription agree that
                Jehoram of Israel and Ahaziah King of Judah died about the same time during a period
                when Hazael threatened Israel. The most important confirmation of the Bible record,
                however, is that David was known to be the dynastic founder of the Royal House of
                Judah. This confirmation was carved in the basalt by an independent observer just a
                few generations after David lived.
              </div>
            </div>
          </div>
          <div className={styles.overlayFadeBottom}></div>
          <div className={styles.overlayFadeTop}></div>
        </div>
      </section>
    </main>
  )
}
