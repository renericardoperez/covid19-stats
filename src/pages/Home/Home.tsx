import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
} from '@ionic/react';
import CountryList from '../../components/CountryList/CountryList';
import { useTypedSelector } from '../../store/reducers';
import { useDispatch } from 'react-redux';
import { fetchCountryList, searchCountry } from '../../store/country/actions';
import { CountryModel } from '../../models/country';
import LocalStorageService from '../../services/localStorage';
import _ from 'lodash';
import { refresh } from 'ionicons/icons';

const Home: React.FC = () => {
  const [countries, setCountries] = useState<CountryModel[]>([]);
  const countryList = useTypedSelector((state) => state.country.countryList);
  const dispatch = useDispatch();

  const handleOnChange = (value: string) => {
    dispatch(searchCountry(value));
  };

  const handleOnRefresh = () => {
    dispatch(fetchCountryList());
  };

  useEffect(() => {
    const storedList = LocalStorageService.getCountryList();
    if (_.isEmpty(storedList)) {
      handleOnRefresh();
    } else {
      dispatch(searchCountry(''));
    }
  }, [false]);

  useEffect(() => {
    setCountries(countryList);
  }, [countryList]);

  useEffect(() => {
    setCountries(countryList);
  }, [countryList]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>
            <h1 style={{ textAlign: 'center' }}>Infected Countries</h1>
          </IonTitle>
        </IonToolbar>
        <IonItem>
          <IonInput
            onIonChange={(e) => handleOnChange(e.detail.value!)}
            placeholder={'Type country name'}
            autofocus={true}
            inputMode={'text'}
            clearInput={true}
            autocomplete={'on'}
            spellCheck={true}
            style={{ textAlign: 'center', maxWidth: '45rem', margin: 'auto' }}
          />
          <IonIcon icon={refresh} onClick={handleOnRefresh} />
        </IonItem>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol sizeLg={'8'} offsetLg={'2'}>
              <CountryList countries={countries} type={'all'} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
