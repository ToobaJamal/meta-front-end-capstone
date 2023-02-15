
export default function Menu() {

    return (
      <div className="menu">
        <div className="menu-desc">
            <p className="title menu-title">This weeks specials!</p>
            <button className="btn">
                    Online Menu
                </button>
        </div>
        <div className="cards">
            <div className="card">
                <img className="menu-img" src="../images/greek-salad.png" alt="greek salad"/>
                <div className="name-price">
                    <p className="item-name">Greek Salad</p>
                    <p className="item-price">$12.99</p>
                </div>
                <div className="item-desc">
                    <p>The famous greek salad of crispy lettuce, 
                        peppers, olives and our Chicago style feta cheese, 
                        garnished with crunchy garlic and rosemary croutons. </p>
                </div>
                <div className="delivery">
                    <p>Order a delivery</p>
                </div>
            </div>
            <div className="card">
                <img className="menu-img" src="../images/greek-salad.png" alt="greek salad"/>
                <div className="name-price">
                    <p>Greek Salad</p>
                    <p>$12.99</p>
                </div>
                <div className="item-desc">
                    <p>The famous greek salad of crispy lettuce, 
                        peppers, olives and our Chicago style feta cheese, 
                        garnished with crunchy garlic and rosemary croutons. </p>
                </div>
                <div className="delivery">
                    <p>Order a delivery</p>
                </div>
            </div>
            <div className="card">
                <img className="menu-img" src="../images/greek-salad.png" alt="greek salad"/>
                <div className="name-price">
                    <p>Greek Salad</p>
                    <p>$12.99</p>
                </div>
                <div className="item-desc">
                    <p>The famous greek salad of crispy lettuce, 
                        peppers, olives and our Chicago style feta cheese, 
                        garnished with crunchy garlic and rosemary croutons. </p>
                </div>
                <div className="delivery">
                    <p>Order a delivery</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
  

  