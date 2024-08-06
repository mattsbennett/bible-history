import clsx from 'clsx'
import Image from 'next/image'
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import gezer from '../../public/gezer.webp'
import teldan from '../../public/teldan.webp'
import s from './page.module.scss'
import { Badge } from './components/Badge'

export default function Home() {
  return (
    <main className={s.main}>
      <section className={s.hero}>
        <h1>How we got our Bible</h1>
        <h2>A journey through time</h2>
      </section>
      <section className={s.timeline}>
        <div className={s.timelineComponent}>
          <div className={s.timelineProgressOverlay}></div>
          <div className={s.timelineProgress}>
            <div className={s.timelineProgressBar}></div>
          </div>
          <div className={s.timelineItem}>
            <div className={s.timelineLeft}>
              <div className={s.discovered}>
                <Badge variant="outline">Discovered</Badge>
                <div>1908</div>
              </div>
              <div className={s.timelineDateText}>
                <div className={s.dated}>
                  <Badge variant="outline">Dated</Badge>
                  <div>1000 BCE</div>
                </div>
              </div>
            </div>
            <div className={s.timelineCentre}>
              <div className={s.timelineCircle}></div>
            </div>
            <div className={s.timelineRight}>
              <div className={s.timelineText}>
                <div className={s.underlineOverlay}></div>
                <h3>Gezer Calendar</h3>
                <h3 aria-hidden className={s.clone}>
                  Gezer Calendar
                </h3>
                <div className={s.imgWrap}>
                  <Image src={gezer} fill alt="Gezer Calendar" />
                </div>
                <div className={s.introWrap}>
                  <p className={s.intro}>
                    This small inscribed limestone tablet was discovered in 1908 by R.A.S.
                    Macalister in the ancient Israeli city of Gezer.
                  </p>
                </div>
                <div className={s.fullTextWrap}>
                  <p className={s.fullText}>
                    The inscription is probably the oldest known example of Hebrew writing with a
                    probable date from the 10th Century BC. This indicates that the inscription was
                    written at a time when the Bible says Solomon was on the throne in Jerusalem - I
                    Kings 9. The tablet is particularly interesting because there are traces of
                    erasing and reuse on both front and back. We can surmise that it may have been a
                    practice tablet for a young scribe 3,000 years ago. The content of the tablet
                    lists agricultural activities and associates each with a number of months in the
                    year. The importance of writing to this early Hebrew society is emphasized. The
                    content of the stone tablet reminds us of the annual routine in a society based
                    upon agriculture. The list on the tablet is as follows:
                  </p>
                  <ul>
                    <li>Two months of ingathering (Exodus 23:16)</li>
                    <li>Two months of sowing (Psalm 107:37)</li>
                    <li>Two months of spring growth (Deuteronomy 11:14)</li>
                    <li>One month of pulling flax (Joshua 2:6)</li>
                    <li>One month of barley harvest (Ruth 1:22)</li>
                    <li>One month when everything else is harvested</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={s.timelineItem}>
            <div className={s.timelineLeft}>
              <div className={s.discovered}>
                <Badge variant="outline">Discovered</Badge>
                <div>1993</div>
              </div>
              <div className={s.timelineDateText}>
                <div className={s.dated}>
                  <Badge variant="outline">Dated</Badge>
                  <div>800 BCE</div>
                </div>
              </div>
            </div>
            <div className={s.timelineCentre}>
              <div className={s.timelineCircle}></div>
            </div>
            <div className={s.timelineRight}>
              <div className={s.timelineText}>
                <div className={s.underlineOverlay}></div>
                <h3>Tel Dan Stone</h3>
                <h3 aria-hidden className={s.clone}>
                  Tel Dan Stone
                </h3>
                <div className={s.imgWrap}>
                  <Image src={teldan} fill alt="Tel Dan Stele" />
                </div>
                <div className={s.introWrap}>
                  <p className={s.intro}>
                    Tel Dan is a biblical site in Northern Israel that has been excavated by the
                    Israeli archaeologist Avraham Biran. The site has been identified with the
                    biblical city of Dan, which was the northernmost city of ancient Israel. Large
                    sections of middle bronze and iron age cities have been uncovered. In 1993, a
                    reused building stone was discovered that contained ancient writing.
                  </p>
                </div>
                <div className={s.fullTextWrap}>
                  <p className={s.fullText}>
                    It was a triumphal inscription in Aramaic, chiselled into the black basalt
                    stone. The king that the stone commemorates was probably Hazael, King of
                    Damascus. It records, from the Aramean perspective, the turbulent politics that
                    engulfed Israel during the 9th Century BC. In the inscription, written about 835
                    BC, Hazael claimed to have killed both the King of Israel and his ally, the King
                    of the House of David. This is the first use of the name David from sources
                    outside the Bible. The inscription was carved about 100 years after David's time
                    and, significantly, it identifies a line of kings descended from David. The
                    Bible record is in II Kings. It and the inscription agree that Jehoram of Israel
                    and Ahaziah King of Judah died about the same time during a period when Hazael
                    threatened Israel. The most important confirmation of the Bible record, however,
                    is that David was known to be the dynastic founder of the Royal House of Judah.
                    This confirmation was carved in the basalt by an independent observer just a few
                    generations after David lived.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={s.overlayFadeBottom}></div>
          <div className={s.overlayFadeTop}></div>
        </div>
      </section>
    </main>
  )
}
