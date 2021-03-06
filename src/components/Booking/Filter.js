function Filter() {
  return (
    <aside className="filter">
      <div className="popular">
        <h2>Popular Filters</h2>
        <form>
          <div className="item">
            <div>
              <input
                type="checkbox"
                id="refund"
                name="refund"
                value="Bike"
              ></input>
              <label for="refund">
                <span>Refundable Fares</span>
              </label>
            </div>
            <span>₹ 21090</span>
          </div>

          <div className="item">
            <div>
              <input
                type="checkbox"
                id="nonstop"
                name="nonstop"
                value="Bike"
              ></input>
              <label for="nonstop">
                <span>Non Stop(54)</span>
              </label>
            </div>
            <span>₹ 21090</span>
          </div>
          <div className="item">
            <div>
              <input type="checkbox" id="late" name="late" value="Bike"></input>
              <label for="late">
                <span>Late Departures(31)</span>
              </label>
            </div>
            <span>₹ 21090</span>
          </div>
          <div className="item">
            <div>
              <input
                type="checkbox"
                id="indiGo"
                name="indiGo"
                value="Bike"
              ></input>
              <label for="indiGo flex">
                <span>indiGo(21)</span>
              </label>
            </div>
            <span>₹ 21090</span>
          </div>
        </form>
        <div>
          <a className="btn-more" href="/">
            + 3 More
          </a>
        </div>
      </div>
      <div className="oneway">
        <h2>One Way Price</h2>
        <div className="progress">
          <span className="progress-bar"></span>
        </div>
        <div className="flex justify-between align-center">
          <p>₹ 21090</p>
          <p>₹ 21090</p>
        </div>
      </div>
      <div className="onward-col">
        <h2>Onward Journey</h2>
        <h3>Stops from New Delhi</h3>
        <form>
          <div className="item">
            <div>
              <input
                type="checkbox"
                id="nonstop"
                name="nonstop"
                value="Bike"
              ></input>
              <label for="nonstop">
                <span>Non Stop(3)</span>
              </label>
            </div>
            <span>₹ 21090</span>
          </div>
          <div className="item">
            <div>
              <input
                type="checkbox"
                id="onestop"
                name="onestop"
                value="Bike"
              ></input>
              <label for="onestop">
                <span>1 Stop(4)</span>
              </label>
            </div>
            <span>₹ 21090</span>
          </div>
        </form>
        <h3>Departure From New Delhi </h3>
        <div className="time">
          <i class="ri-sun-line"></i>
          <p>After 6 PM</p>
          <h4>₹ 21090</h4>
        </div>
        <h3>Arrival at Bengaluru </h3>
        <div className="flex">
          <div className="time">
            <i class="ri-sun-line"></i>
            <p>After 6 PM</p>
            <h4>₹ 21090</h4>
          </div>
          <div className="time">
            <i class="ri-sun-line"></i>
            <p>After 6 PM</p>
            <h4>₹ 21090</h4>
          </div>
        </div>
      </div>

      <div className="return-col">
        <h2>Return Journey</h2>
        <h3>Stops from New Delhi</h3>
        <form>
          <div className="item">
            <div>
              <input
                type="checkbox"
                id="nonstop"
                name="nonstop"
                value="Bike"
              ></input>
              <label for="nonstop">
                <span>Non Stop(3)</span>
              </label>
            </div>
            <span>₹ 21090</span>
          </div>
          <div className="item">
            <div>
              <input
                type="checkbox"
                id="onestop"
                name="onestop"
                value="Bike"
              ></input>
              <label for="onestop">
                <span>1 Stop(4)</span>
              </label>
            </div>
            <span>₹ 21090</span>
          </div>
        </form>
        <h3>Departurr From New Delhi </h3>
        <div className="time">
          <i class="ri-sun-line"></i>
          <p>After 6 PM</p>
          <h4>₹ 21090</h4>
        </div>
        <h3>Arrival at Bengaluru </h3>
        <div className="flex">
          <div className="time">
            <i class="ri-sun-line"></i>
            <p>After 6 PM</p>
            <h4>₹ 21090</h4>
          </div>
          <div className="time">
            <i class="ri-sun-line"></i>
            <p>After 6 PM</p>
            <h4>₹ 21090</h4>
          </div>
        </div>
      </div>
      <div className="airlines">
        <h2>Airlines</h2>
        <form>
          <div className="item">
            <div>
              <input
                type="checkbox"
                id="refund"
                name="refund"
                value="Bike"
              ></input>
              <label for="refund">
                <span>Refundable Fares</span>
              </label>
            </div>
            <span>₹ 21090</span>
          </div>

          <div className="item">
            <div>
              <input
                type="checkbox"
                id="nonstop"
                name="nonstop"
                value="Bike"
              ></input>
              <label for="nonstop">
                <span>Non Stop(54)</span>
              </label>
            </div>
            <span>₹ 21090</span>
          </div>
          <div className="item">
            <div>
              <input type="checkbox" id="late" name="late" value="Bike"></input>
              <label for="late">
                <span>Late Departures(31)</span>
              </label>
            </div>
            <span>₹ 21090</span>
          </div>
          <div className="item">
            <div>
              <input
                type="checkbox"
                id="indiGo"
                name="indiGo"
                value="Bike"
              ></input>
              <label for="indiGo">
                <span>indiGo(21)</span>
              </label>
            </div>
            <span>₹ 21090</span>
          </div>
        </form>
      </div>
    </aside>
  );
}

export default Filter;
