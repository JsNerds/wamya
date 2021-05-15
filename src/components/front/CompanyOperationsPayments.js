import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Checkbox, Card, Button } from "@material-ui/core";
export default function CompanyOperationsPayments(props) {
  function total() {
    return props.payments?.reduce(function(total, item) {
      total += item.Amount / 100;
      console.log("total", total);
      return total;
    }, 0);
  }

  const CardTypeImage = (cardType) => {
    switch (cardType) {
      case "mastercard":
        return (
          <img
            src={require("../../assets/images/mastercard.png")}
            width="60"
            height="30"
            alt="Mastercard"
          />
        );
      case "visa":
        return (
          <img
            src={require("../../assets/images/visa-512.png")}
            width="60"
            height="30"
            alt="Mastercard"
          />
        );
      case "discover":
        return (
          <img
            src={require("../../assets/images/discover-credit-debit-card-bank-transaction-32285.png")}
            width="80"
            height="50"
            alt="Mastercard"
          />
        );
      default:
        return <img src="../../assets/images/mastercard.png" />;
    }
  };

  return (
    <Fragment>
      <Card className="card-box mb-4">
        <div className="card-header">
          <div className="card-header--title">
            <h4 className="font-size-lg mb-0 py-2 font-weight-bold">
              Operations and Payments
            </h4>
          </div>
        </div>
        <div className="card-body px-0 pt-2 pb-3">
          <table className="table table-hover table-borderless table-alternate text-nowrap mb-0">
            {}
            <thead>
              <tr>
                <th className="text-center">Customer</th>
                <th className="text-center">Email</th>
                <th className="text-center">Address</th>
                <th className="text-center">Credit Card</th>
                <th className="text-center">Card Type</th>
                <th className="text-center">Expiration Date</th>
                <th className="text-center">Amount</th>
                <th className="text-right">Actions</th>
                <th className="text-right">Totals</th>
              </tr>
            </thead>
            <tbody>
              {props.payments?.map((payment, index) => (
                <tr key={index}>
                  <td>
                    <div className="d-flex">
                      <div>
                        <a
                          href="#/"
                          className="font-weight-bold text-black"
                          title="..."
                        >
                          {payment.NameOnCard}
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="text-center">
                    <span className="font-weight-bold">{payment.Email}</span>
                  </td>
                  <td className="text-center">
                    <span className="font-weight-bold">
                      {payment.Address.City}
                    </span>
                  </td>

                  <td className="text-center">
                    <span className="font-weight-bold">
                      {" "}
                      **** **** **** {payment.creditCard}
                    </span>
                  </td>

                  <td className="text-center">
                    <span>{CardTypeImage(payment.CardType)}</span>
                  </td>

                  {Date.parse(payment.ExpirationDate) > Date.now() ? (
                    <td className="text-center">
                      <div className="badge badge-success px-4">unexpired</div>
                    </td>
                  ) : (
                    <td className="text-center">
                      <div className="badge badge-danger px-4">Expired</div>
                    </td>
                  )}

                  <td className="text-right">
                    <div className="d-flex align-items-center justify-content-end">
                      <div className="font-weight-bold font-size-lg pr-2">
                        {" "}
                        {payment.Amount / 100}TND
                      </div>
                    </div>
                  </td>

                  <td className="text-center"></td>
                </tr>
              ))}

              <tr>
                <td></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-center"></td>
                <td className="text-right">
                  <div className="d-flex align-items-center justify-content-end">
                    <div className="font-weight-bold font-size-lg pr-2">
                      {" "}
                      {total()} TND
                    </div>
                    <FontAwesomeIcon
                      icon={["fas", "arrow-up"]}
                      className="font-size-sm opacity-5"
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="divider mb-3" />
          <div className="text-center">
            <Button color="primary">
              <span className="btn-wrapper--label">View details</span>
              <span className="btn-wrapper--icon">
                <FontAwesomeIcon icon={["fas", "chevron-right"]} />
              </span>
            </Button>
          </div>
        </div>
      </Card>
    </Fragment>
  );
}
