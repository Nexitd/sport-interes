import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Card, Col, Row } from "antd";
import { getFootballEventsByCountryName } from "../../store/slices/football";
import { countries } from "../../Utils/countries";

const gridStyle = {
  width: "50%",
  textAlign: "center",
};

const CountriesTabs = () => {
  const dispatch = useDispatch();
  const { eventsByCountry } = useSelector(
    (state) => state.football,
    shallowEqual
  );

  useEffect(() => {
    dispatch(getFootballEventsByCountryName("Россия"));
  }, [dispatch]);

  const getEvents = (countryName) => {
    dispatch(getFootballEventsByCountryName(countryName));
  };

  // console.log(eventsByCountry);

  return (
    <>
      <Row>
        <Col span={12}>
          <Row>
            <Card>
              {countries.map((country) => (
                <Card.Grid
                  key={country.id}
                  style={gridStyle}
                  onClick={() => getEvents(country.name)}
                >
                  <img src={country.flag} alt={country.shortName} />
                  {country.name}
                </Card.Grid>
              ))}
            </Card>
          </Row>
        </Col>
        <Col span={12}></Col>
      </Row>
    </>
  );
};

export default CountriesTabs;
