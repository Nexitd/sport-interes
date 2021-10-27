import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Card, Col, Row, Spin } from "antd";
import { getFootballEventsByCountryName } from "../../store/slices/football";
import { countries } from "../../utils/countries";
import { TournirCard } from "../../components";

const gridStyle = {
  width: "50%",
  textAlign: "center",
};

const CountriesTabs = () => {
  const dispatch = useDispatch();
  const { eventsByCountry, loading } = useSelector(
    (state) => state.football,
    shallowEqual
  );

  useEffect(() => {
    dispatch(getFootballEventsByCountryName("Россия"));
  }, [dispatch]);

  const getEvents = (countryName) => {
    dispatch(getFootballEventsByCountryName(countryName));
  };

  return (
    <>
      <Row>
        <Col span={12}>
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
        </Col>
        <Col span={12}>
          {loading ? (
            <Spin />
          ) : (
            Object.values(eventsByCountry).map(
              (event) =>
                typeof event !== "number" && (
                  <TournirCard key={event.id} item={event} />
                )
            )
          )}
        </Col>
      </Row>
    </>
  );
};

export default CountriesTabs;
