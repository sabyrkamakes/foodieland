import './SubscribeBanner.scss'
import Button from '@/components/Button'

export default () => {
  return (
    <section
      className="subscribe-banner container"
      aria-labelledby="subscribe-banner-title"
    >
      <div className="subscribe-banner__inner">
        <div className="subscribe-banner__body">
          <h2 className="subscribe-banner__title" id="subscribe-banner-title">
            Deliciousness to your inbox
          </h2>
          <div className="subscribe-banner__description">
            <p>
              Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad
              minim
            </p>
          </div>
        </div>
        <form className="subscribe-banner__form">
          <div className="subscribe-banner__field">
            <label className="visually-hidden" htmlFor="email">
              Email
            </label>
            <input
              className="subscribe-banner__input"
              id="email"
              name="email"
              type="email"
              placeholder="Your email address..."
            />
            <Button type="submit" mode="small">
              Subscribe
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
