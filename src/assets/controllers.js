const controllersArr = [
  {
    "name": "Account/Login",
    "type": "post",
    "description": "Авторизация пользователя. Получить авторизационный токен.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "Задает имя пользователя и пароль.",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Account.LoginRequest"
        }
      }
    ],
    "result": {
      "$ref": "Account.LoginResponse"
    }
  },
  {
    "name": "Account/Logoff",
    "type": "post",
    "description": "Завершение сессии пользователя.",
    "parameters": [],
    "result": {
      "$ref": "Account.LogoffResponse"
    }
  },
  {
    "name": "Account/Subscription",
    "type": "post",
    "description": "Подписка пользователя",
    "parameters": [],
    "result": {
      "$ref": "Account.SubscriptionResponse"
    }
  },
  {
    "name": "Account/Validate",
    "type": "post",
    "description": "Валидация текущего сеанса",
    "parameters": [],
    "result": {
      "$ref": "Account.ValidateResponse"
    }
  },
  {
    "name": "Affiliate/{fininstId}/list",
    "type": "post",
    "description": "Возвращает список аффилированных лиц и организаций для указанной компании на заданную дату",
    "parameters": [
      {
        "name": "fininstId",
        "in": "path",
        "description": "Идентификатор компании в БД Интерфакс",
        "required": true,
        "type": "integer",
        "format": "int64"
      },
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Affiliate.ListRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Affiliates.ListFields"
      }
    }
  },
  {
    "name": "Affiliate/{fininstId}/reports",
    "type": "post",
    "description": "Возвращает список ссылок на исходные отчеты по аффилированным лицам",
    "parameters": [
      {
        "name": "fininstId",
        "in": "path",
        "description": "Идентификатор компании в БД Интерфакс",
        "required": true,
        "type": "integer",
        "format": "int64"
      },
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Affiliate.ReportsRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Affiliates.ReportsFields"
      }
    }
  },
  {
    "name": "Affiliate/types",
    "type": "post",
    "description": "Возвращает справочник типов аффилированности",
    "parameters": [],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Affiliates.TypesFields"
      }
    }
  },
  {
    "name": "Archive/BondYields",
    "type": "post",
    "description": "Получить доходности и другие рыночные показатели облигации на заданную дату.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Archive.BondYieldsRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Archive.BondYieldsFields"
      }
    }
  },
  {
    "name": "Archive/CashCurrencyRate",
    "type": "post",
    "description": "Получить данные о курсах наличной валюты за указанную дату.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Archive.CashCurrencyRateRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Archive.CashCurrencyRateFields"
      }
    }
  },
  {
    "name": "Archive/CurrencyRate",
    "type": "post",
    "description": "Получить кросс-курс двух валют.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Archive.CurrencyRateRequest"
        }
      }
    ],
    "result": {
      "$ref": "Archive.CurrencyRateResponse"
    }
  },
  {
    "name": "Archive/EndOfDay",
    "type": "post",
    "description": "Получить данные по результатам торгов на заданную дату.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Archive.EndOfDayRequest"
        }
      }
    ],
    "result": {
      "$ref": "Archive.HistoryFullFields"
    }
  },
  {
    "name": "Archive/EndOfDayOnExchanges",
    "type": "post",
    "description": "Итоги торгов по инструментам за период на различных площадках.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Archive.EndOfDayOnExchangesRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Archive.EndOfDayOnExchangeFields"
      }
    }
  },
  {
    "name": "Archive/History",
    "type": "post",
    "description": "Получить данные о торгах за указанный период.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Archive.HistoryRequest"
        }
      }
    ],
    "result": {
      "$ref": "Archive.HistoryFullFields"
    }
  },
  {
    "name": "Archive/HistoryOfficial",
    "type": "post",
    "description": "Официальные итоги торгов по инструменту",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Archive.HistoryRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Archive.HistoryOfficialFullFieldsV2"
      }
    }
  },
  {
    "name": "Archive/MultiHistory",
    "type": "post",
    "description": "Получить данные о торгах за указанный период.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Archive.MultiHistoryRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Archive.MultiHistoryGroup"
      }
    }
  },
  {
    "name": "Bond/{fintoolId}/Amortizations",
    "type": "post",
    "description": "Получить план погашения выпусков с амортизацией долга.",
    "parameters": [
      {
        "name": "fintoolId",
        "in": "path",
        "description": "Идентификатор финансового инструмента в базе Интерфакс",
        "required": true,
        "type": "integer",
        "format": "int64"
      },
      {
        "name": "req",
        "in": "body",
        "description": "Параметры запроса",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.AmortizationsRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.AmortizationsFields"
      }
    }
  },
  {
    "name": "Bond/{fintoolId}/Coupons",
    "type": "post",
    "description": "Получить данные по купонам.",
    "parameters": [
      {
        "name": "fintoolId",
        "in": "path",
        "description": "Идентификатор финансового инструмента в базе Интерфакс",
        "required": true,
        "type": "integer",
        "format": "int64"
      },
      {
        "name": "req",
        "in": "body",
        "description": "Параметры запроса",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.CouponsRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.CouponsFields"
      }
    }
  },
  {
    "name": "Bond/{fintoolId}/CovenantInfo",
    "type": "post",
    "description": "Возвращает список ковенант для указанного fintoolId облигации",
    "parameters": [
      {
        "name": "fintoolId",
        "in": "path",
        "description": "",
        "required": true,
        "type": "integer",
        "format": "int64"
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.CovenantsInfoFields"
      }
    }
  },
  {
    "name": "Bond/{fintoolId}/Offers",
    "type": "post",
    "description": "Получить данные по досрочным выкупам/офертам.",
    "parameters": [
      {
        "name": "fintoolId",
        "in": "path",
        "description": "Идентификатор финансового инструмента в базе Интерфакс",
        "required": true,
        "type": "integer",
        "format": "int64"
      },
      {
        "name": "req",
        "in": "body",
        "description": "Параметры запроса",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.OffersRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.OffersFields"
      }
    }
  },
  {
    "name": "Bond/Amortizations",
    "type": "post",
    "description": "Получить план погашения выпусков с амортизацией долга.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.AmortizationsRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.AmortizationsFields"
      }
    }
  },
  {
    "name": "Bond/AmortizationsExt",
    "type": "post",
    "description": "Получить расширенный план погашения выпусков с амортизацией долга.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.AmortizationsExtRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.AmortizationsExtFields"
      }
    }
  },
  {
    "name": "Bond/AuctionData",
    "type": "post",
    "description": "Получить данные по первичным размещениям.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.AuctionDataRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.AuctionDataFields"
      }
    }
  },
  {
    "name": "Bond/Calculate",
    "type": "post",
    "description": "Calculate bond yields, durations, face value",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.CalculateRequest"
        }
      }
    ],
    "result": {
      "$ref": "Bond.CalculateResponse"
    }
  },
  {
    "name": "Bond/CalculateBond",
    "type": "post",
    "description": "Произвести вычисления доходностей и других параметров облигаций.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.CalculateBondRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.CalculateBondFields"
      }
    }
  },
  {
    "name": "Bond/CalculateBondEx",
    "type": "post",
    "description": "Произвести вычисления доходностей и других параметров облигаций. Является аналогом метода CalculateBond с дополнительными полями входного параметра couponForecast и couponBinding.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.CalculateBondExRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.CalculateBondFields"
      }
    }
  },
  {
    "name": "Bond/CalculateBondMulti",
    "type": "post",
    "description": "Аналог CalcucalteBondEx для списка инструментов",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.CalculateBondMultiRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.CalculateBondMultiResponse"
      }
    }
  },
  {
    "name": "Bond/Classification",
    "type": "post",
    "description": "Получить классификацию выпуска.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.ClassificationRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.ClassificationFields"
      }
    }
  },
  {
    "name": "Bond/CommonData",
    "type": "post",
    "description": "Получить общие данные по выпуску.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.CommonDataRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.CommonDataFields"
      }
    }
  },
  {
    "name": "Bond/CommonDataExt",
    "type": "post",
    "description": "Получить расширенные общие данные по выпуску.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.CommonDataExtRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.CommonDataExtFields"
      }
    }
  },
  {
    "name": "Bond/Convertation",
    "type": "post",
    "description": "Получить данные по конвертациям облигаций в другие инструменты.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.ConvertationRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.ConvertationFields"
      }
    }
  },
  {
    "name": "Bond/Coupons",
    "type": "post",
    "description": "Получить данные по купонам.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.CouponsRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.CouponsFields"
      }
    }
  },
  {
    "name": "Bond/CouponsExt",
    "type": "post",
    "description": "Получить расширенные данные по купонам.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.CouponsExtRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.CouponsExtFields"
      }
    }
  },
  {
    "name": "Bond/DateOptions",
    "type": "post",
    "description": "Получить параметры облигации, зависимые от даты.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.DateOptionsRequest"
        }
      }
    ],
    "result": {
      "$ref": "Bond.DateOptionsResponse"
    }
  },
  {
    "name": "Bond/DateOptionsFields",
    "type": "post",
    "description": "Получить справочник полей для метода DateOptionsTable.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.DateOptionsFieldsRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.DateOptionsFieldsFields"
      }
    }
  },
  {
    "name": "Bond/DateOptionsTable",
    "type": "post",
    "description": "Получить параметры облигации, зависимые от даты, в табличном виде.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.DateOptionsTableRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.DateOptionsTableFields"
      }
    }
  },
  {
    "name": "Bond/DefaultEvents",
    "type": "post",
    "description": "Получить данные по дефолтам по облигациям.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.DefaultEventsRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.DefaultEventsFields"
      }
    }
  },
  {
    "name": "Bond/DefaultsTable",
    "type": "post",
    "description": "Получить список произошедших дефолтов.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.DefaultsTableRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.DefaultsTableFields"
      }
    }
  },
  {
    "name": "Bond/EmissionDocs",
    "type": "post",
    "description": "Получить ссылки на документы эмиссий.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.EmissionDocsRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.EmissionDocsFields"
      }
    }
  },
  {
    "name": "Bond/g-curve-ofz",
    "type": "post",
    "description": "Параметры кривой бескупонной доходности государственных облигаций",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.RuData.GCurveOFZRequest"
        }
      }
    ],
    "result": {
      "$ref": "RuData.GCurveOFZResponse"
    }
  },
  {
    "name": "Bond/ListBondTypes",
    "type": "post",
    "description": "Получить справочник типов облигаций.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.ListBondTypesRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.ListBondTypesFields"
      }
    }
  },
  {
    "name": "Bond/ListOrgRoles",
    "type": "post",
    "description": "Получить справочник ролей организаций.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.ListOrgRolesRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.ListOrgRolesFields"
      }
    }
  },
  {
    "name": "Bond/ListTypeGroups",
    "type": "post",
    "description": "Получить категории типов облигаций.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.ListTypeGroupsRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.ListTypeGroupsFields"
      }
    }
  },
  {
    "name": "Bond/Offers",
    "type": "post",
    "description": "Получить данные по досрочным выкупам/офертам.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.OffersRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.OffersFields"
      }
    }
  },
  {
    "name": "Bond/Organizers",
    "type": "post",
    "description": "Получить роли организаторов выпуска.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.OrganizersRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.OrganizersFields"
      }
    }
  },
  {
    "name": "Bond/Programs",
    "type": "post",
    "description": "Получить данные по программам выпуска облигаций.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.ProgramsRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.ProgramsFields"
      }
    }
  },
  {
    "name": "Bond/RiskData",
    "type": "post",
    "description": "Получить данные, необходимые для расчёта рисков по выпуску.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.RiskDataRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.RiskDataFields"
      }
    }
  },
  {
    "name": "Bond/TimeTable",
    "type": "post",
    "description": "Получить календарь событий.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.TimeTableRequest"
        }
      }
    ],
    "result": {
      "$ref": "Bond.TimeTableResponse"
    }
  },
  {
    "name": "Bond/TimeTableFieldGroups",
    "type": "post",
    "description": "Получить справочник групп полей (см. метод TimeTableFields).",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.TimeTableFieldGroupsRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.TimeTableFieldGroupsFields"
      }
    }
  },
  {
    "name": "Bond/TimeTableFields",
    "type": "post",
    "description": "Получить справочник полей для использования в календаре событий (см. метод TimeTable).",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.Bond.TimeTableFieldsRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "Bond.TimeTableFieldsFields"
      }
    }
  },
  {
    "name": "CorporateAction/Actions",
    "type": "post",
    "description": "Получить корпоративные действия.",
    "parameters": [
      {
        "name": "req",
        "in": "body",
        "description": "",
        "required": false,
        "schema": {
          "$ref": "Requests.V2.CorporateAction.ActionsRequest"
        }
      }
    ],
    "result": {
      "uniqueItems": false,
      "type": "array",
      "items": {
        "$ref": "CorporateAction.ActionsFields"
      }
    }
  }
]

const models = {
  "Requests.V2.Account.LoginRequest": {
    "type": "object",
    "properties": {
      "login": {
        "type": "string"
      },
      "password": {
        "type": "string"
      }
    }
  },
  "Account.LoginResponse": {
    "description": "Ответ",
    "type": "object",
    "properties": {
      "token": {
        "description": "Токен пользователя",
        "type": "string"
      }
    }
  },
  "Account.LogoffResponse": {
    "type": "object",
    "properties": {}
  },
  "Account.SubscriptionResponse": {
    "type": "object",
    "properties": {
      "user": {
        "$ref": "Account.SubscriptionUser"
      },
      "roles": {
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Account.SubscriptionRole"
        }
      },
      "privilegies": {
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Account.SubscriptionPrivilege"
        }
      }
    }
  },
  "Account.SubscriptionUser": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int32",
        "type": "integer"
      },
      "login": {
        "type": "string"
      },
      "fullName": {
        "type": "string"
      },
      "email": {
        "type": "string"
      }
    }
  },
  "Account.SubscriptionRole": {
    "type": "object",
    "properties": {
      "roleId": {
        "format": "int32",
        "type": "integer"
      },
      "userId": {
        "format": "int32",
        "type": "integer"
      },
      "name": {
        "type": "string"
      }
    }
  },
  "Account.SubscriptionPrivilege": {
    "type": "object",
    "properties": {
      "privilegeId": {
        "format": "int32",
        "type": "integer"
      },
      "userId": {
        "format": "int32",
        "type": "integer"
      },
      "roleId": {
        "format": "int32",
        "type": "integer"
      },
      "productId": {
        "format": "int32",
        "type": "integer"
      },
      "code": {
        "type": "string"
      },
      "name": {
        "type": "string"
      }
    }
  },
  "Account.ValidateResponse": {
    "type": "object",
    "properties": {
      "status": {
        "format": "int32",
        "type": "integer"
      },
      "description": {
        "type": "string"
      }
    }
  },
  "Requests.V2.Affiliate.ListRequest": {
    "type": "object",
    "properties": {
      "actualDate": {
        "format": "date-time",
        "description": "Необязательный параметр. Дата актуальности списка. Если параметр не указан, то используется текущая дата",
        "type": "string"
      }
    }
  },
  "Affiliates.ListFields": {
    "description": "Список аффилированных лиц и организаций для указанной компании",
    "type": "object",
    "properties": {
      "fininstid": {
        "format": "int64",
        "description": "Идентификатор компании в БД Интерфакс.",
        "type": "integer"
      },
      "dt": {
        "format": "date-time",
        "description": "Дата актуальности списка.",
        "type": "string"
      },
      "affiliates_id": {
        "format": "int64",
        "description": "Идентификатор компании/лица в списке аффилированных организаций.",
        "type": "integer"
      },
      "affiliates_fininstid": {
        "format": "int64",
        "description": "Идентификатор аффилированной компании в БД Интерфакс.",
        "type": "integer"
      },
      "fullname_rus": {
        "description": "Наименование аффилированной компании/ФИО аффилированного лица",
        "type": "string"
      },
      "address": {
        "description": "Адрес аффилированной компании/аффилированного лица",
        "type": "string"
      },
      "inn": {
        "description": "ИНН",
        "type": "string"
      },
      "reg_code": {
        "description": "Регистрационный код",
        "type": "string"
      },
      "affiliates_type_id": {
        "format": "int64",
        "description": "Идентификатор типа аффилированности.",
        "type": "integer"
      },
      "is_organization": {
        "format": "int32",
        "description": "=1 для юридических лиц",
        "type": "integer"
      },
      "is_groupbaseorg": {
        "format": "int32",
        "description": "=1 для группоорганизующих компаний",
        "type": "integer"
      },
      "begin_period": {
        "format": "date-time",
        "description": "Дата начала аффилированности.",
        "type": "string"
      },
      "end_period": {
        "format": "date-time",
        "description": "Дата окончания аффилированности.",
        "type": "string"
      },
      "begin_report_id": {
        "format": "int64",
        "description": "Идентификатор отчета о начале аффилированности.",
        "type": "integer"
      },
      "confirm_report_id": {
        "format": "int64",
        "description": "Идентификатор отчета о подтверждении аффилированности.",
        "type": "integer"
      },
      "end_report_id": {
        "format": "int64",
        "description": "Идентификатор отчета об окончании аффилированности.",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Affiliate.ReportsRequest": {
    "type": "object",
    "properties": {}
  },
  "Affiliates.ReportsFields": {
    "description": "Список ссылок на исходные отчеты по аффилированным лицам",
    "type": "object",
    "properties": {
      "report_id": {
        "format": "int32",
        "description": "Идентификатор отчета",
        "type": "integer"
      },
      "fininstid": {
        "format": "int64",
        "description": "Идентификатор компании, предоставившей отчет, в БД Интерфакс",
        "type": "integer"
      },
      "report_date": {
        "format": "date-time",
        "description": "Дата отчета",
        "type": "string"
      },
      "link": {
        "description": "Ссылка на отчет",
        "type": "string"
      },
      "update_date": {
        "format": "date-time",
        "description": "Дата обновления информации",
        "type": "string"
      }
    }
  },
  "Affiliates.TypesFields": {
    "description": "Справочник типов аффилированности",
    "type": "object",
    "properties": {
      "affiliates_type_id": {
        "format": "int32",
        "description": "Идентификатор типа аффилированности",
        "type": "integer"
      },
      "shortname_rus": {
        "description": "Краткое наименование типа",
        "type": "string"
      },
      "fullname_rus": {
        "description": "Полное наименование типа",
        "type": "string"
      }
    }
  },
  "Requests.V2.Archive.BondYieldsRequest": {
    "description": "BondYieldsRequest",
    "required": [
      "date"
    ],
    "type": "object",
    "properties": {
      "issId": {
        "format": "int64",
        "description": "Идентификатор инструмента",
        "type": "integer"
      },
      "isin": {
        "description": "ISIN",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата запрашиваемых данных",
        "type": "string"
      },
      "mode": {
        "format": "int32",
        "description": "Тип возвращаемых данных (к погашению – 1, к оферте – 2, сводные – 3, все – 0)",
        "type": "integer"
      },
      "fields": {
        "description": "Список кодовых наименований полей; если не задан, то возвращаются все доступные поля.",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    }
  },
  "Archive.BondYieldsFields": {
    "description": "",
    "type": "object",
    "properties": {
      "circulation": {
        "format": "int64",
        "description": "Период обращения",
        "type": "integer"
      },
      "circulation_12m": {
        "format": "int64",
        "description": "Период обращения за 12 месяцев",
        "type": "integer"
      },
      "circulation_1m": {
        "format": "int64",
        "description": "Период обращения средний за 1 месяц",
        "type": "integer"
      },
      "circulation_2m": {
        "format": "int64",
        "description": "Период обращения средний за 2 месяца",
        "type": "integer"
      },
      "circulation_2w": {
        "format": "int64",
        "description": "Период обращения средний за 2 недели",
        "type": "integer"
      },
      "circulation_3m": {
        "format": "int64",
        "description": "Период обращения за 3 месяца",
        "type": "integer"
      },
      "circulation_6m": {
        "format": "int64",
        "description": "Период обращения за 6 месяцев",
        "type": "integer"
      },
      "convexity": {
        "format": "decimal(16,8)",
        "description": "Выпуклость",
        "type": "number"
      },
      "dt": {
        "format": "date-time",
        "description": "Дата",
        "type": "string"
      },
      "duration": {
        "format": "int64",
        "description": "Дюрация по Маколею",
        "type": "integer"
      },
      "duration_12m": {
        "format": "int64",
        "description": "Дюрация по Маколею средняя за 12 месяцев",
        "type": "integer"
      },
      "duration_1m": {
        "format": "int64",
        "description": "Дюрация по Маколею средняя за 1 месяц",
        "type": "integer"
      },
      "duration_2m": {
        "format": "int64",
        "description": "Дюрация по Маколею средняя за 2 месяца",
        "type": "integer"
      },
      "duration_2w": {
        "format": "int64",
        "description": "Дюрация по Маколею средняя за 2 недели",
        "type": "integer"
      },
      "duration_3m": {
        "format": "int64",
        "description": "Дюрация по Маколею средняя за 3 месяца",
        "type": "integer"
      },
      "duration_6m": {
        "format": "int64",
        "description": "Дюрация по Маколею средняя за 6 месяцев",
        "type": "integer"
      },
      "duration_n": {
        "format": "decimal(16,8)",
        "description": "Дюрация по Маколею приведенная",
        "type": "number"
      },
      "duration_n_12m": {
        "format": "decimal(16,8)",
        "description": "Дюрация по Маколею приведенная средняя за 12 месяцев",
        "type": "number"
      },
      "duration_n_1m": {
        "format": "decimal(16,8)",
        "description": "Дюрация по Маколею приведенная средняя за 1 месяц",
        "type": "number"
      },
      "duration_n_2m": {
        "format": "decimal(16,8)",
        "description": "Дюрация по Маколею приведенная средняя за 2 месяца",
        "type": "number"
      },
      "duration_n_2w": {
        "format": "decimal(16,8)",
        "description": "Дюрация по Маколею приведенная средняя за 2 недели",
        "type": "number"
      },
      "duration_n_3m": {
        "format": "decimal(16,8)",
        "description": "Дюрация по Маколею приведенная средняя за 3 месяца",
        "type": "number"
      },
      "duration_n_6m": {
        "format": "decimal(16,8)",
        "description": "Дюрация по Маколею приведенная средняя за 6 месяцев",
        "type": "number"
      },
      "id_iss": {
        "format": "int64",
        "description": "Идентификатор инструмента",
        "type": "integer"
      },
      "id_offer": {
        "format": "int64",
        "description": "Номер оферты",
        "type": "integer"
      },
      "pvbp": {
        "format": "decimal(16,8)",
        "description": "Изменение цены при изменении доходности на 1 базисный пункт, руб.",
        "type": "number"
      },
      "type": {
        "format": "int32",
        "description": "Тип возвращаемых данных:\r\n0 – к погашению\r\n1 – к оферте\r\n2 – сводные",
        "type": "integer"
      },
      "yield_12m": {
        "format": "decimal(16,8)",
        "description": "Доходность средняя за 12 месяцев",
        "type": "number"
      },
      "yield_1m": {
        "format": "decimal(16,8)",
        "description": "Доходность средняя за 1 месяц",
        "type": "number"
      },
      "yield_2m": {
        "format": "decimal(16,8)",
        "description": "Доходность средняя за 2 месяца",
        "type": "number"
      },
      "yield_2w": {
        "format": "decimal(16,8)",
        "description": "Доходность средняя за 3 месяца",
        "type": "number"
      },
      "yield_3m": {
        "format": "decimal(16,8)",
        "description": "Доходность средняя за 6 месяцев",
        "type": "number"
      },
      "yield_6m": {
        "format": "decimal(16,8)",
        "description": "Доходность средняя за 6 месяцев",
        "type": "number"
      },
      "yield_agg": {
        "format": "decimal(16,8)",
        "description": "Доходность агрегатная",
        "type": "number"
      },
      "yield_agg_12m": {
        "format": "decimal(16,8)",
        "description": "Доходность агрегатная средняя за 12 месяцев",
        "type": "number"
      },
      "yield_agg_1m": {
        "format": "decimal(16,8)",
        "description": "Доходность агрегатная средняя за 1 месяц",
        "type": "number"
      },
      "yield_agg_2m": {
        "format": "decimal(16,8)",
        "description": "Доходность агрегатная средняя за 2 месяца",
        "type": "number"
      },
      "yield_agg_2w": {
        "format": "decimal(16,8)",
        "description": "Доходность агрегатная средняя за 2 недели",
        "type": "number"
      },
      "yield_agg_3m": {
        "format": "decimal(16,8)",
        "description": "Доходность агрегатная средняя за 3 месяца",
        "type": "number"
      },
      "yield_agg_6m": {
        "format": "decimal(16,8)",
        "description": "Доходность агрегатная средняя за 6 месяцев",
        "type": "number"
      },
      "yield_ask": {
        "format": "decimal(16,8)",
        "description": "Доходность по цене продажи",
        "type": "number"
      },
      "yield_bid": {
        "format": "decimal(16,8)",
        "description": "Доходность по цене покупки",
        "type": "number"
      },
      "yield_clast": {
        "format": "decimal(16,8)",
        "description": "Доходность по цене последней сделки",
        "type": "number"
      },
      "yield_cwa": {
        "format": "decimal(16,8)",
        "description": "Доходность текущая по средневзвешенной цене",
        "type": "number"
      },
      "yield_high": {
        "format": "decimal(16,8)",
        "description": "Доходность по максимальной цене",
        "type": "number"
      },
      "yield_last": {
        "format": "decimal(16,8)",
        "description": "Доходность по цене последней сделки",
        "type": "number"
      },
      "yield_low": {
        "format": "decimal(16,8)",
        "description": "Доходность по минимальной цене",
        "type": "number"
      },
      "yield_mq": {
        "format": "decimal(16,8)",
        "description": "Доходность по средней котировке",
        "type": "number"
      },
      "yield_open": {
        "format": "decimal(16,8)",
        "description": "Доходность по цене открытия",
        "type": "number"
      },
      "yield_slast": {
        "format": "decimal(16,8)",
        "description": "Доходность простая по цене последней сделки",
        "type": "number"
      },
      "yield_swa": {
        "format": "decimal(16,8)",
        "description": "Доходность простая по средневзвешенной цене",
        "type": "number"
      },
      "yield_wa": {
        "format": "decimal(16,8)",
        "description": "Доходность по средневзвешенной цене",
        "type": "number"
      }
    }
  },
  "Requests.V2.Archive.CashCurrencyRateRequest": {
    "type": "object",
    "properties": {
      "date": {
        "format": "date-time",
        "description": "Дата курса. Если параметр пустой, возвращаются курсы на текущую дату.",
        "type": "string"
      },
      "filter": {
        "description": "Строка фильтрации",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Archive.CashCurrencyRateFields": {
    "type": "object",
    "properties": {
      "rates_date": {
        "format": "date-time",
        "description": "Дата курса",
        "type": "string"
      },
      "fininstid": {
        "format": "int64",
        "description": "Идентификатор компании (банка) в базе Интерфакс",
        "type": "integer"
      },
      "contactid": {
        "format": "int64",
        "description": "Идентификатор группы в рамках банка",
        "type": "integer"
      },
      "bid": {
        "format": "decimal(16,8)",
        "description": "Покупка",
        "type": "number"
      },
      "ask": {
        "format": "decimal(16,8)",
        "description": "Продажа",
        "type": "number"
      },
      "currency_from": {
        "description": "Котируемая валюта",
        "type": "string"
      },
      "multiplier_from": {
        "format": "int64",
        "description": "Лот",
        "type": "integer"
      },
      "currency_to": {
        "description": "Базовая валюта",
        "type": "string"
      }
    }
  },
  "Requests.V2.Archive.CurrencyRateRequest": {
    "required": [
      "from",
      "to",
      "date"
    ],
    "type": "object",
    "properties": {
      "from": {
        "description": "Из какой валюты, трехбуквенный код",
        "type": "string"
      },
      "to": {
        "description": "В какую валюту, трехбуквенный код",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата курса",
        "type": "string"
      }
    }
  },
  "Archive.CurrencyRateResponse": {
    "type": "object",
    "properties": {
      "rate": {
        "format": "decimal(38,8)",
        "description": "Курс",
        "type": "number"
      },
      "error": {
        "description": "Текст ошибки, если она есть",
        "type": "string"
      }
    }
  },
  "Requests.V2.Archive.EndOfDayRequest": {
    "required": [
      "date"
    ],
    "type": "object",
    "properties": {
      "issId": {
        "format": "int64",
        "description": "Идентификатор инструмента",
        "type": "integer"
      },
      "isin": {
        "description": "ISIN",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата запрашиваемых данных",
        "type": "string"
      },
      "dateType": {
        "description": "Тип возвращаемых данных:\r\nACTUAL – строго на указанную дату(умолчание)\r\nLAST_TRADE_DATE – на ближайшую окончившуюся торговую сессию",
        "type": "string"
      },
      "fields": {
        "description": "Список кодовых наименований полей, колонка name из выходной таблицы метода /Info/Fields. \r\nПо умолчанию выводятся все доступные поля.",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "official": {
        "description": "Запрос официальных итогов:\r\n1 – запрашивать официальные итоги",
        "type": "boolean"
      },
      "tradeSite": {
        "description": "Идентификатор торговой площадки/источника, возвращаемый методом /Info/Exchange_tree.",
        "type": "string"
      }
    }
  },
  "Archive.HistoryFullFields": {
    "type": "object",
    "properties": {
      "accruedint": {
        "format": "decimal(20,8)",
        "description": "Накопленный купонный доход (= ставка купона * количество дней с момента начала очередного купонного периода)",
        "type": "number"
      },
      "admquote": {
        "format": "decimal(16,8)",
        "description": "Признаваемая котировка, рассчитываемая в соответствии Положением о порядке и сроках определения стоимости чистых активов акционерных инвестиционных фондов, стоимости чистых активов паевых инвестиционных фондов, расчетной стоимости инвестиционных паев паевых инвестиционных фондов, а также стоимости чистых активов акционерных инвестиционных фондов в расчете на одну акцию (утв. приказом Федеральной службы по финансовым рынкам от 15 июня 2005 г. № 05-21/пз-н)",
        "type": "number"
      },
      "akm_bl_n": {
        "type": "string"
      },
      "akm_e_n": {
        "type": "string"
      },
      "ask": {
        "format": "decimal(16,8)",
        "description": "Лучшая цена продажи в валюте торгов",
        "type": "number"
      },
      "ask_size": {
        "format": "int64",
        "description": "Объем по лучшей цене продажи в штуках",
        "type": "integer"
      },
      "ask_size_total": {
        "format": "int64",
        "description": "Полный объем предложения",
        "type": "integer"
      },
      "avge_chng": {
        "format": "decimal(16,2)",
        "description": "Изменение средневзвешенной цены за текущий торговый день к средневзвешенной цене предыдущего торгового дня в пунктах (= средневзвешенная цена - цена закрытия предыдущего торгового дня)",
        "type": "number"
      },
      "avge_chng_pct": {
        "format": "decimal(16,2)",
        "description": "Относительное изменение средневзвешенной цены к средневзвешенной предыдущего дня в % (= Средневзвешенная цена / Средневзвешенная цена на закрытие предыдущего торгового дня - 1)",
        "type": "number"
      },
      "avge_prce": {
        "format": "decimal(16,8)",
        "description": "Средневзвешенная цена за текущий торговый день",
        "type": "number"
      },
      "avge_yield": {
        "format": "decimal(16,8)",
        "description": "Доходность по средневзвешенной цене текущего торгового дня",
        "type": "number"
      },
      "bid": {
        "format": "decimal(16,8)",
        "description": "Лучшая цена покупки в валюте торгов",
        "type": "number"
      },
      "bid_size": {
        "format": "int64",
        "description": "Объем по лучшей цене покупки в штуках",
        "type": "integer"
      },
      "bid_size_total": {
        "format": "int64",
        "description": "Полный объем спроса",
        "type": "integer"
      },
      "boardid": {
        "description": "Код режима торгов",
        "type": "string"
      },
      "boardname": {
        "description": "Режим торгов и/или Котировальный лист",
        "type": "string"
      },
      "buybackdate": {
        "format": "date-time",
        "description": "Дата обратного выкупа",
        "type": "string"
      },
      "buybackprice": {
        "format": "decimal(16,8)",
        "description": "Дата обратного выкупа",
        "type": "number"
      },
      "cbr_lombard": {
        "format": "decimal(16,8)",
        "description": "Ломбард",
        "type": "number"
      },
      "cbr_pledge": {
        "format": "decimal(16,8)",
        "description": "Залог РЕПО",
        "type": "number"
      },
      "chng": {
        "format": "decimal(16,8)",
        "description": "Изменение цены последней сделки к цене закрытия предыдущего дня в пунктах (= цена последней сделки - цена закрытия предыдущего торгового дня)",
        "type": "number"
      },
      "chng_m": {
        "format": "decimal(16,8)",
        "description": "Изменение цены последней сделки к цене закрытия месяц назад в пунктах",
        "type": "number"
      },
      "chng_m_pct": {
        "format": "decimal(16,2)",
        "description": "Относительное изменение цены последней сделки к цене закрытия месяц назад в %",
        "type": "number"
      },
      "chng_pct": {
        "format": "decimal(16,2)",
        "description": "Относительное изменение цены последней сделки к цене закрытия предыдущего дня в % (= Цена последней сделки / Цена закрытия предыдущего торгового дня - 1)",
        "type": "number"
      },
      "chng_w": {
        "format": "decimal(16,8)",
        "description": "Изменение цены последней сделки к цене закрытия неделю назад в пунктах",
        "type": "number"
      },
      "chng_w_pct": {
        "format": "decimal(16,2)",
        "description": "Относительное изменение цены последней сделки к цене закрытия неделю назад в %",
        "type": "number"
      },
      "chng_y": {
        "format": "decimal(16,8)",
        "description": "Изменение цены последней сделки к цене закрытия год назад в пунктах",
        "type": "number"
      },
      "chng_y_pct": {
        "format": "decimal(16,2)",
        "description": "Относительное изменение цены последней сделки к цене закрытия год назад в %",
        "type": "number"
      },
      "close": {
        "format": "decimal(16,8)",
        "description": "Цена закрытия предыдущего дня в валюте торгов",
        "type": "number"
      },
      "consensus_num_est": {
        "format": "int32",
        "description": "Количество рекомендаций",
        "type": "integer"
      },
      "consensus_time": {
        "format": "date-time",
        "description": "Дата последней оценки (подтверждение , изменение и т.д.)",
        "type": "string"
      },
      "convexity": {
        "format": "decimal(16,8)",
        "description": "Выпуклость к погашению",
        "type": "number"
      },
      "convexity_agg": {
        "format": "decimal(16,8)",
        "description": "Выпуклость сводная",
        "type": "number"
      },
      "convexity_o": {
        "format": "decimal(16,8)",
        "description": "Выпуклость к оферте",
        "type": "number"
      },
      "cpn": {
        "format": "decimal(16,8)",
        "description": "Размер ближайшего купона (облигации)",
        "type": "number"
      },
      "cpn_date": {
        "format": "date-time",
        "description": "Дата очередной купонной выплаты (облигации)",
        "type": "string"
      },
      "cpn_period": {
        "format": "int64",
        "description": "Купонный период в днях",
        "type": "integer"
      },
      "cpprice": {
        "format": "decimal(16,8)",
        "description": "Цена периода закрытия в валюте торгов",
        "type": "number"
      },
      "deal_acc": {
        "format": "int64",
        "description": "Количество сделок за текущий торговый день",
        "type": "integer"
      },
      "discount": {
        "format": "decimal(16,8)",
        "description": "Дисконт",
        "type": "number"
      },
      "dnt06beg": {
        "format": "decimal(16,8)",
        "description": "Начальный дисконт для сроков РЕПО до 6 дней",
        "type": "number"
      },
      "dnt06max": {
        "format": "decimal(16,8)",
        "description": "Максимальный дисконт для сроков РЕПО до 6 дней",
        "type": "number"
      },
      "dnt06min": {
        "format": "decimal(16,8)",
        "description": "Минимальный дисконт для сроков РЕПО до 6 дней",
        "type": "number"
      },
      "dnt120beg": {
        "format": "decimal(16,8)",
        "description": "Начальный дисконт для сроков РЕПО от 15 до 90 дней",
        "type": "number"
      },
      "dnt120max": {
        "format": "decimal(16,8)",
        "description": "Максимальный дисконт для сроков РЕПО от 15 до 90 дней",
        "type": "number"
      },
      "dnt120min": {
        "format": "decimal(16,8)",
        "description": "Минимальный дисконт для сроков РЕПО от 15 до 90 дней",
        "type": "number"
      },
      "dnt14beg": {
        "format": "decimal(16,8)",
        "description": "Начальный дисконт для сроков РЕПО от 7 до 14 дней",
        "type": "number"
      },
      "dnt14max": {
        "format": "decimal(16,8)",
        "description": "Максимальный дисконт для сроков РЕПО от 7 до 14 дней",
        "type": "number"
      },
      "dnt14min": {
        "format": "decimal(16,8)",
        "description": "Минимальный дисконт для сроков РЕПО от 7 до 14 дней",
        "type": "number"
      },
      "dnt200beg": {
        "format": "decimal(16,8)",
        "description": "Начальный дисконт для сроков РЕПО от 91 до 180 дней",
        "type": "number"
      },
      "dnt200max": {
        "format": "decimal(16,8)",
        "description": "Максимальный дисконт для сроков РЕПО от 91 до 180 дней",
        "type": "number"
      },
      "dnt200min": {
        "format": "decimal(16,8)",
        "description": "Минимальный дисконт для сроков РЕПО от 91 до 180 дней",
        "type": "number"
      },
      "dnt365beg": {
        "format": "decimal(16,8)",
        "description": "Начальный дисконт для сроков РЕПО от 201 до 365 дней",
        "type": "number"
      },
      "dnt365max": {
        "format": "decimal(16,8)",
        "description": "Максимальный дисконт для сроков РЕПО от 201 до 365 дней",
        "type": "number"
      },
      "dnt365min": {
        "format": "decimal(16,8)",
        "description": "Минимальный дисконт для сроков РЕПО от 201 до 365 дней",
        "type": "number"
      },
      "duration": {
        "format": "int64",
        "description": "Дюрация по Маколею",
        "type": "integer"
      },
      "duration_agg": {
        "format": "int64",
        "description": "Сводная дюрация",
        "type": "integer"
      },
      "duration_n": {
        "format": "decimal(16,8)",
        "description": "Дюрация к погашению модифицированная",
        "type": "number"
      },
      "duration_o": {
        "format": "int64",
        "description": "Дюрация к оферте",
        "type": "integer"
      },
      "duration_on": {
        "format": "decimal(16,8)",
        "description": "Дюрация к оферте модифицированная",
        "type": "number"
      },
      "exch": {
        "description": "Краткое наименование торговой площадки",
        "type": "string"
      },
      "exp_bl_n": {
        "type": "string"
      },
      "exp_e_n": {
        "type": "string"
      },
      "facevalue": {
        "format": "decimal(38,20)",
        "description": "Номинал",
        "type": "number"
      },
      "facevalue_currency": {
        "description": "Валюта номинала",
        "type": "string"
      },
      "fact_frcst_chng": {
        "description": "Абсолютное изменение между фактом и прогнозом",
        "type": "string"
      },
      "fch_b_i": {
        "description": "",
        "type": "string"
      },
      "fch_b_n": {
        "type": "string"
      },
      "fch_e_dlti": {
        "type": "string"
      },
      "fch_e_lti": {
        "type": "string"
      },
      "forecast": {
        "format": "decimal(16,8)",
        "description": "Прогноз",
        "type": "number"
      },
      "frcst_chng": {
        "description": "Абсолютное изменение прогноза",
        "type": "string"
      },
      "high": {
        "format": "decimal(16,8)",
        "description": "Максимальная цена в валюте торгов за текущий торговый день",
        "type": "number"
      },
      "ifx_b_i": {
        "description": "",
        "type": "string"
      },
      "ifx_b_n": {
        "type": "string"
      },
      "ifx_e_i": {
        "type": "string"
      },
      "ifx_e_n": {
        "type": "string"
      },
      "isin": {
        "description": "Код инструмента ISIN",
        "type": "string"
      },
      "issuer": {
        "description": "Эмитент",
        "type": "string"
      },
      "issuesize": {
        "format": "int64",
        "description": "Объем выпуска в штуках",
        "type": "integer"
      },
      "last": {
        "format": "decimal(16,8)",
        "description": "Цена последней сделки в валюте торгов",
        "type": "number"
      },
      "last_time": {
        "format": "date-time",
        "description": "Время последней сделки (= ЧЧ.ММ.СС, если в ходе последних торогов, ДД.ММ.ГГ, если ранее)",
        "type": "string"
      },
      "last_yield": {
        "format": "decimal(16,8)",
        "description": "Доходность к погашению по последней сделке в % годовых",
        "type": "number"
      },
      "last2avge": {
        "format": "decimal(16,8)",
        "description": "Изменение последней цены к средневзвзвешенной на закрытие предыдущего торгового дня в пунктах",
        "type": "number"
      },
      "lastsettlecode": {
        "description": "Код расчетов последней сделки",
        "type": "string"
      },
      "lclose": {
        "format": "decimal(16,8)",
        "description": "Официальная текущая цена закрытия",
        "type": "number"
      },
      "lnkcurrency": {
        "description": "Сопряженная валюта",
        "type": "string"
      },
      "lotsize": {
        "format": "int64",
        "description": "Лот в штуках",
        "type": "integer"
      },
      "low": {
        "format": "decimal(16,8)",
        "description": "Минимальная цена в валюте торгов за текущий торговый день",
        "type": "number"
      },
      "mat_date": {
        "description": "Дата погашения (экспирации) типа String",
        "type": "string"
      },
      "mat_date_dt": {
        "format": "date-time",
        "description": "Дата погашения (экспирации) типа DateTime",
        "type": "string",
        "readOnly": true
      },
      "mcap": {
        "format": "decimal(20,2)",
        "description": "Капитализация (= Рыночная цена * количество бумаг в обращении)",
        "type": "number"
      },
      "mds_b_i": {
        "description": "",
        "type": "string"
      },
      "mds_b_n": {
        "type": "string"
      },
      "mds_e_lti": {
        "type": "string"
      },
      "mds_e_ltn": {
        "type": "string"
      },
      "mprice": {
        "format": "decimal(16,8)",
        "description": "Рыночная цена3 в валюте торгов, рассчитываемая в соответствии с с Приказом ФСФР от 09 ноября 2010 г. № 10-65/пз-н \"Об утверждении Порядка определения рыночной цены ценных бумаг, расчетной цены ценных бумаг, а также предельной границы колебаний рыночной цены ценных бумаг в целях 23 главы Налогового кодекса Российской Федерации\"",
        "type": "number"
      },
      "mprice2": {
        "format": "decimal(16,8)",
        "description": "Рыночная цена2 в валюте торгов, рассчитываемая в соответствии с Порядком расчета рыночной стоимости активов и стоимости чистых активов, в которые инвестированы средства пенсионных накоплений (утв. приказом Федеральной службы по финансовым рынкам от 26 декабря 2006 г. № 06-155/пз-н) и Порядком расчета рыночной стоимости активов и стоимости чистых активов, в которые инвестированы накопления для жилищного обеспечения военнослужащих (утв. приказом Федеральной службы по финансовым рынкам от 15 декабря 2005 г. № 05-82/пз-н)",
        "type": "number"
      },
      "name": {
        "description": "Краткое наименование инструмента на площадке",
        "type": "string"
      },
      "open": {
        "format": "decimal(16,8)",
        "description": "Цена открытия (обычно = цена первой сделки) в валюте торгов",
        "type": "number"
      },
      "open_inst": {
        "format": "int64",
        "description": "Количество открытых позиций",
        "type": "integer"
      },
      "opprice": {
        "format": "decimal(16,8)",
        "description": "Цена периода открытия в валюте торгов",
        "type": "number"
      },
      "period": {
        "description": "Период в текстовом представлении",
        "type": "string"
      },
      "potential": {
        "format": "decimal(38,8)",
        "description": "Относительное изменение Прогнозной к Рыночной цене",
        "type": "number"
      },
      "prevmprice": {
        "format": "decimal(16,8)",
        "description": "Предыдущая рыночная цена цена3 в валюте торгов",
        "type": "number"
      },
      "publication_date": {
        "format": "date-time",
        "description": "Дата публикации факта следующего периода",
        "type": "string"
      },
      "pvbp": {
        "format": "decimal(38,8)",
        "description": "PVBP к погашению",
        "type": "number"
      },
      "pvbp_agg": {
        "format": "decimal(38,8)",
        "description": "PVBP сводная",
        "type": "number"
      },
      "pvbp_o": {
        "format": "decimal(38,8)",
        "description": "PVBP к оферте",
        "type": "number"
      },
      "rec_buy_pct": {
        "format": "decimal(16,2)",
        "description": "Доля рекомендаций \"Покупать\"",
        "type": "number"
      },
      "rec_change": {
        "format": "int32",
        "description": "Изменение рекомендации",
        "type": "integer"
      },
      "rec_hold_pct": {
        "format": "decimal(16,2)",
        "description": "Доля рекомендаций \"Держать\"",
        "type": "number"
      },
      "rec_sell_pct": {
        "format": "decimal(16,2)",
        "description": "Доля рекомендаций \"Продавать\"",
        "type": "number"
      },
      "rec_val": {
        "format": "decimal(8,1)",
        "description": "Оценка рекомендации в масштабе от -1 до 1",
        "type": "number"
      },
      "recommendation": {
        "description": "Рекомендация по бумаге",
        "type": "string"
      },
      "rus_b_n": {
        "type": "string"
      },
      "rus_e_i": {
        "type": "string"
      },
      "rus_e_n": {
        "type": "string"
      },
      "seccode": {
        "description": "Торговый код инструмента на площадке",
        "type": "string"
      },
      "secname": {
        "description": "Полное русское наименование",
        "type": "string"
      },
      "secname_e": {
        "description": "Полное английское наименование",
        "type": "string"
      },
      "sector": {
        "description": "Сектор",
        "type": "string"
      },
      "settlecode": {
        "description": "Код расчетов (определяет временные параметры сделки)",
        "type": "string"
      },
      "shortname_eng": {
        "description": "Краткое английское наименование",
        "type": "string"
      },
      "shortname_rus": {
        "description": "Краткое русское наименование",
        "type": "string"
      },
      "snp_b_i": {
        "description": "",
        "type": "string"
      },
      "snp_b_n": {
        "type": "string"
      },
      "snp_e_lti": {
        "type": "string"
      },
      "snp_e_n": {
        "type": "string"
      },
      "spread": {
        "format": "decimal(16,8)",
        "description": "Спред",
        "type": "number"
      },
      "status": {
        "description": "Торговый статус инструмента (торгуется ли он на площадке в текущий торговый день)",
        "type": "string"
      },
      "target_price": {
        "format": "decimal(18,6)",
        "description": "Прогнозная цена",
        "type": "number"
      },
      "tick_acc": {
        "description": "Количество изменений",
        "type": "string"
      },
      "time": {
        "format": "date-time",
        "description": "Время последнего события по инструменту (сделки или котировки)",
        "type": "string"
      },
      "tp_chng": {
        "format": "decimal(38,8)",
        "description": "Абсолютное изменение Прогнозной цены",
        "type": "number"
      },
      "tp_chng_m": {
        "format": "decimal(38,8)",
        "description": "Абсолютное изменение Прогнозной цены за месяц",
        "type": "number"
      },
      "tp_chng_m_pct": {
        "format": "decimal(38,8)",
        "description": "Относительное изменение Прогнозной цены за месяц",
        "type": "number"
      },
      "tp_chng_pct": {
        "format": "decimal(38,8)",
        "description": "Относительное изменение Прогнозной цены",
        "type": "number"
      },
      "tp_chng_q": {
        "format": "decimal(38,8)",
        "description": "Относительное изменение Прогнозной цены",
        "type": "number"
      },
      "tp_chng_q_pct": {
        "format": "decimal(38,8)",
        "description": "Относительное изменение Прогнозной цены за 3 месяца",
        "type": "number"
      },
      "tp_chng_time": {
        "format": "date-time",
        "description": "Дата последнего ненулевого изменения Прогнозной цены",
        "type": "string"
      },
      "tp_chng_y": {
        "format": "decimal(38,8)",
        "description": "Абсолютное изменение Прогнозной цены за год",
        "type": "number"
      },
      "tp_chng_y_pct": {
        "format": "decimal(38,8)",
        "description": "Относительное изменение Прогнозной цены за год",
        "type": "number"
      },
      "tp_deviation": {
        "format": "decimal(18,6)",
        "description": "Стандартное отклонение по оценкам Прогнозной цены",
        "type": "number"
      },
      "tp_high": {
        "format": "decimal(18,6)",
        "description": "Максимальная из оценок Прогнозной цены",
        "type": "number"
      },
      "tp_low": {
        "format": "decimal(18,6)",
        "description": "Минимальная из оценок Прогнозной цены",
        "type": "number"
      },
      "tp_median": {
        "format": "decimal(18,6)",
        "description": "Медианная оценка прогнозной цены",
        "type": "number"
      },
      "val": {
        "format": "decimal(32,8)",
        "description": "Оборот последней сделки в валюте торгов (= цена последней сделки * объем последней сделки)",
        "type": "number"
      },
      "val_acc": {
        "format": "decimal(26,2)",
        "description": "Дневной оборот в валюте торгов за текущий торговый день",
        "type": "number"
      },
      "val_acc_usd": {
        "format": "decimal(38,8)",
        "description": "Суммарный оборот в долларах США",
        "type": "number"
      },
      "val_usd": {
        "format": "decimal(38,8)",
        "description": "Оборот последней сделки в долларах США",
        "type": "number"
      },
      "vol": {
        "format": "int64",
        "description": "Объём последней сделки в штуках",
        "type": "integer"
      },
      "vol_acc": {
        "format": "int64",
        "description": "Дневной объем в штуках за текущий торговый день",
        "type": "integer"
      },
      "vol_lots": {
        "format": "int64",
        "description": "Объем последней сделки в лотах",
        "type": "integer"
      },
      "y2o_ask": {
        "format": "decimal(16,8)",
        "description": "Доходность к оферте по предложению",
        "type": "number"
      },
      "y2o_bid": {
        "format": "decimal(16,8)",
        "description": "Доходность к оферте по спросу",
        "type": "number"
      },
      "y2o_change": {
        "format": "decimal(16,8)",
        "description": "Изменение доходности к оферте абс.",
        "type": "number"
      },
      "y2o_change_pct": {
        "format": "decimal(16,3)",
        "description": "Изменение доходности к оферте отн.",
        "type": "number"
      },
      "y2o_last": {
        "format": "decimal(16,8)",
        "description": "Доходность к оферте по цене последней сделки",
        "type": "number"
      },
      "y2o_prev": {
        "format": "decimal(16,8)",
        "description": "Доходность к оферте по цене пред.дня",
        "type": "number"
      },
      "y2o_wap": {
        "format": "decimal(16,8)",
        "description": "Доходность к оферте по средневзвешенной цене",
        "type": "number"
      },
      "yield_2": {
        "format": "decimal(16,8)",
        "description": "Доходность к аукциону в % годовых",
        "type": "number"
      },
      "yield_agg": {
        "format": "decimal(16,8)",
        "description": "Сводная доходность",
        "type": "number"
      },
      "yield_ask": {
        "format": "decimal(16,8)",
        "description": "Доходность к погашению по предложению",
        "type": "number"
      },
      "yield_average_12m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность за 12 месяцев",
        "type": "number"
      },
      "yield_average_1m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность за 1 месяц",
        "type": "number"
      },
      "yield_average_2m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность за 2 месяца",
        "type": "number"
      },
      "yield_average_2w": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность за 2 недели",
        "type": "number"
      },
      "yield_average_3m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность за 3 месяца",
        "type": "number"
      },
      "yield_average_6m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность за 6 месяцев",
        "type": "number"
      },
      "yield_average_o12m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность к оферте за 12 месяцев",
        "type": "number"
      },
      "yield_average_o1m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность к оферте за 1 месяц",
        "type": "number"
      },
      "yield_average_o2m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность к оферте за 2 месяца",
        "type": "number"
      },
      "yield_average_o2w": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность к оферте за 2 недели",
        "type": "number"
      },
      "yield_average_o3m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность к оферте за 3 месяца",
        "type": "number"
      },
      "yield_average_o6m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность к оферте за 6 месяцев",
        "type": "number"
      },
      "yield_bid": {
        "format": "decimal(16,8)",
        "description": "Доходность к погашению по спросу",
        "type": "number"
      },
      "yield_chng": {
        "format": "decimal(16,8)",
        "description": "Изменение доходности последней сделки к доходности по закрытию предыдущих торгов",
        "type": "number"
      },
      "yield_cpprice": {
        "format": "decimal(16,8)",
        "description": "Доходность к погашению по цене закрытия",
        "type": "number"
      },
      "yield_cwa": {
        "format": "decimal(16,8)",
        "description": "Доходность текущая по средневзвешенной",
        "type": "number"
      },
      "yield_high": {
        "format": "decimal(16,8)",
        "description": "Максимальная доходность",
        "type": "number"
      },
      "yield_low": {
        "format": "decimal(16,8)",
        "description": "Минимальная доходность",
        "type": "number"
      },
      "yield_o_cwa": {
        "format": "decimal(16,8)",
        "description": "Доходность к оферте текущая по средневзвешенной",
        "type": "number"
      },
      "yield_o_swa": {
        "format": "decimal(16,8)",
        "description": "Доходность к оферте простая по средневзвешенной",
        "type": "number"
      },
      "yield_open": {
        "format": "decimal(16,8)",
        "description": "Доходность первой сделки",
        "type": "number"
      },
      "yield_prev": {
        "format": "decimal(16,8)",
        "description": "Доходность к погашению по цене пред. дня",
        "type": "number"
      },
      "yield_swa": {
        "format": "decimal(16,8)",
        "description": "Доходность простая по средневзвешенной",
        "type": "number"
      },
      "total_return": {
        "format": "decimal(20,8)",
        "description": "Накопленная стоимость",
        "type": "number"
      },
      "full_price_pct": {
        "format": "decimal(20,8)",
        "description": "Полная цена, %",
        "type": "number"
      },
      "zspread": {
        "format": "decimal(20,8)",
        "description": "Z-спрэд",
        "type": "number"
      },
      "currency": {
        "description": "Валюта торгов",
        "type": "string"
      }
    }
  },
  "Requests.V2.Archive.EndOfDayOnExchangesRequest": {
    "required": [
      "fields"
    ],
    "type": "object",
    "properties": {
      "codes": {
        "description": "Идентификаторы инструментов: ISIN или регистрационный номер (RegCode) или код НРД (NRDCode);\r\nМаксимальное количество элементов: 20",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "fintoolIds": {
        "description": "Числовые идентификаторы в базе Интерфакс; если заданы и Codes и FintoolIds - используется FintoolIds;\r\nМаксимальное количество элементов: 20",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "format": "int64",
          "type": "integer"
        }
      },
      "tradeSites": {
        "description": "Список торговых площадок, ID из справочника «Торговые площадки»;",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "format": "int32",
          "type": "integer"
        }
      },
      "boardIds": {
        "description": "Список boardID для MOEX",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "dateFrom": {
        "format": "date-time",
        "description": "Дата начала периода; умолчание - вчера;",
        "type": "string"
      },
      "dateTo": {
        "format": "date-time",
        "description": "Дата окончания периода; умолчание - вчера;",
        "type": "string"
      },
      "fields": {
        "description": "Обязательный, список кодовых наименований полей, колонка name из выходной таблицы метода /Info/Fields;",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "official": {
        "description": "Флаг официальных итогов",
        "type": "boolean"
      }
    }
  },
  "Archive.EndOfDayOnExchangeFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int64",
        "description": "Числовой идентификатор торгового инструмента в БД Интерфакс (iss_id)",
        "type": "integer"
      },
      "fintoolId": {
        "format": "int64",
        "description": "Числовой идентификатор инструмента в базе Интерфакс",
        "type": "integer"
      },
      "tradeSite": {
        "format": "int32",
        "description": "Id торговой площадки",
        "type": "integer"
      },
      "accruedint": {
        "format": "decimal(20,8)",
        "description": "Накопленный купонный доход (= ставка купона * количество дней с момента начала очередного купонного периода)",
        "type": "number"
      },
      "admquote": {
        "format": "decimal(16,8)",
        "description": "Признаваемая котировка, рассчитываемая в соответствии Положением о порядке и сроках определения стоимости чистых активов акционерных инвестиционных фондов, стоимости чистых активов паевых инвестиционных фондов, расчетной стоимости инвестиционных паев паевых инвестиционных фондов, а также стоимости чистых активов акционерных инвестиционных фондов в расчете на одну акцию (утв. приказом Федеральной службы по финансовым рынкам от 15 июня 2005 г. № 05-21/пз-н)",
        "type": "number"
      },
      "ask": {
        "format": "decimal(16,8)",
        "description": "Лучшая цена продажи в валюте торгов",
        "type": "number"
      },
      "ask_size": {
        "format": "int64",
        "description": "Объем по лучшей цене продажи в штуках",
        "type": "integer"
      },
      "ask_size_total": {
        "format": "double",
        "description": "Полный объем предложения",
        "type": "number"
      },
      "avge_chng": {
        "format": "decimal(16,2)",
        "description": "Изменение средневзвешенной цены за текущий торговый день к средневзвешенной цене предыдущего торгового дня в пунктах (= средневзвешенная цена - цена закрытия предыдущего торгового дня)",
        "type": "number"
      },
      "avge_chng_pct": {
        "format": "decimal(16,2)",
        "description": "Относительное изменение средневзвешенной цены к средневзвешенной предыдущего дня в % (= Средневзвешенная цена / Средневзвешенная цена на закрытие предыдущего торгового дня - 1)",
        "type": "number"
      },
      "avge_prce": {
        "format": "decimal(16,8)",
        "description": "Средневзвешенная цена за текущий торговый день",
        "type": "number"
      },
      "avge_yield": {
        "format": "decimal(16,8)",
        "description": "Доходность по средневзвешенной цене текущего торгового дня",
        "type": "number"
      },
      "bid": {
        "format": "decimal(16,8)",
        "description": "Лучшая цена покупки в валюте торгов",
        "type": "number"
      },
      "bid_size": {
        "format": "int64",
        "description": "Объем по лучшей цене покупки в штуках",
        "type": "integer"
      },
      "bid_size_total": {
        "format": "double",
        "description": "Полный объем спроса",
        "type": "number"
      },
      "boardid": {
        "description": "Код режима торгов",
        "type": "string"
      },
      "boardname": {
        "description": "Режим торгов и/или Котировальный лист",
        "type": "string"
      },
      "buybackdate": {
        "format": "date-time",
        "description": "Дата обратного выкупа",
        "type": "string"
      },
      "buybackprice": {
        "format": "decimal(16,8)",
        "description": "Дата обратного выкупа",
        "type": "number"
      },
      "cbr_lombard": {
        "format": "decimal(16,8)",
        "description": "Ломбард",
        "type": "number"
      },
      "cbr_pledge": {
        "format": "decimal(16,8)",
        "description": "Залог РЕПО",
        "type": "number"
      },
      "chng": {
        "format": "decimal(16,8)",
        "description": "Изменение цены последней сделки к цене закрытия предыдущего дня в пунктах (= цена последней сделки - цена закрытия предыдущего торгового дня)",
        "type": "number"
      },
      "chng_m": {
        "format": "decimal(16,8)",
        "description": "Изменение цены последней сделки к цене закрытия месяц назад в пунктах",
        "type": "number"
      },
      "chng_m_pct": {
        "format": "decimal(16,2)",
        "description": "Относительное изменение цены последней сделки к цене закрытия месяц назад в %",
        "type": "number"
      },
      "chng_pct": {
        "format": "decimal(16,2)",
        "description": "Относительное изменение цены последней сделки к цене закрытия предыдущего дня в % (= Цена последней сделки / Цена закрытия предыдущего торгового дня - 1)",
        "type": "number"
      },
      "chng_w": {
        "format": "decimal(16,8)",
        "description": "Изменение цены последней сделки к цене закрытия неделю назад в пунктах",
        "type": "number"
      },
      "chng_w_pct": {
        "format": "decimal(16,2)",
        "description": "Относительное изменение цены последней сделки к цене закрытия неделю назад в %",
        "type": "number"
      },
      "chng_y": {
        "format": "decimal(16,8)",
        "description": "Изменение цены последней сделки к цене закрытия год назад в пунктах",
        "type": "number"
      },
      "chng_y_pct": {
        "format": "decimal(16,2)",
        "description": "Относительное изменение цены последней сделки к цене закрытия год назад в %",
        "type": "number"
      },
      "close": {
        "format": "decimal(16,8)",
        "description": "Цена закрытия предыдущего дня в валюте торгов",
        "type": "number"
      },
      "comment": {
        "type": "string"
      },
      "consensus_num_est": {
        "format": "int32",
        "description": "Количество рекомендаций",
        "type": "integer"
      },
      "consensus_time": {
        "format": "date-time",
        "description": "Дата последней оценки (подтверждение , изменение и т.д.)",
        "type": "string"
      },
      "convexity": {
        "format": "decimal(16,8)",
        "description": "Выпуклость к погашению",
        "type": "number"
      },
      "convexity_agg": {
        "format": "decimal(16,8)",
        "description": "Выпуклость сводная",
        "type": "number"
      },
      "convexity_o": {
        "format": "decimal(16,8)",
        "description": "Выпуклость к оферте",
        "type": "number"
      },
      "cpn": {
        "format": "decimal(16,8)",
        "description": "Размер ближайшего купона (облигации)",
        "type": "number"
      },
      "cpn_date": {
        "format": "date-time",
        "description": "Дата очередной купонной выплаты (облигации)",
        "type": "string"
      },
      "cpn_period": {
        "format": "int64",
        "description": "Купонный период в днях",
        "type": "integer"
      },
      "cpprice": {
        "format": "decimal(16,8)",
        "description": "Цена периода закрытия в валюте торгов",
        "type": "number"
      },
      "currency": {
        "description": "Валюта торгов",
        "type": "string"
      },
      "deal_acc": {
        "format": "int64",
        "description": "Количество сделок за текущий торговый день",
        "type": "integer"
      },
      "discount": {
        "format": "decimal(16,8)",
        "description": "Дисконт",
        "type": "number"
      },
      "dnt06beg": {
        "format": "decimal(16,8)",
        "description": "Начальный дисконт для сроков РЕПО до 6 дней",
        "type": "number"
      },
      "dnt06max": {
        "format": "decimal(16,8)",
        "description": "Максимальный дисконт для сроков РЕПО до 6 дней",
        "type": "number"
      },
      "dnt06min": {
        "format": "decimal(16,8)",
        "description": "Минимальный дисконт для сроков РЕПО до 6 дней",
        "type": "number"
      },
      "dnt120beg": {
        "format": "decimal(16,8)",
        "description": "Начальный дисконт для сроков РЕПО от 15 до 90 дней",
        "type": "number"
      },
      "dnt120max": {
        "format": "decimal(16,8)",
        "description": "Максимальный дисконт для сроков РЕПО от 15 до 90 дней",
        "type": "number"
      },
      "dnt120min": {
        "format": "decimal(16,8)",
        "description": "Минимальный дисконт для сроков РЕПО от 15 до 90 дней",
        "type": "number"
      },
      "dnt14beg": {
        "format": "decimal(16,8)",
        "description": "Начальный дисконт для сроков РЕПО от 7 до 14 дней",
        "type": "number"
      },
      "dnt14max": {
        "format": "decimal(16,8)",
        "description": "Максимальный дисконт для сроков РЕПО от 7 до 14 дней",
        "type": "number"
      },
      "dnt14min": {
        "format": "decimal(16,8)",
        "description": "Минимальный дисконт для сроков РЕПО от 7 до 14 дней",
        "type": "number"
      },
      "dnt200beg": {
        "format": "decimal(16,8)",
        "description": "Начальный дисконт для сроков РЕПО от 91 до 180 дней",
        "type": "number"
      },
      "dnt200max": {
        "format": "decimal(16,8)",
        "description": "Максимальный дисконт для сроков РЕПО от 91 до 180 дней",
        "type": "number"
      },
      "dnt200min": {
        "format": "decimal(16,8)",
        "description": "Минимальный дисконт для сроков РЕПО от 91 до 180 дней",
        "type": "number"
      },
      "dnt365beg": {
        "format": "decimal(16,8)",
        "description": "Начальный дисконт для сроков РЕПО от 201 до 365 дней",
        "type": "number"
      },
      "dnt365max": {
        "format": "decimal(16,8)",
        "description": "Максимальный дисконт для сроков РЕПО от 201 до 365 дней",
        "type": "number"
      },
      "dnt365min": {
        "format": "decimal(16,8)",
        "description": "Минимальный дисконт для сроков РЕПО от 201 до 365 дней",
        "type": "number"
      },
      "duration": {
        "format": "int64",
        "description": "Дюрация по Маколею",
        "type": "integer"
      },
      "duration_agg": {
        "format": "int64",
        "description": "Сводная дюрация",
        "type": "integer"
      },
      "duration_n": {
        "format": "decimal(16,8)",
        "description": "Дюрация к погашению модифицированная",
        "type": "number"
      },
      "duration_o": {
        "format": "int64",
        "description": "Дюрация к оферте",
        "type": "integer"
      },
      "duration_on": {
        "format": "decimal(16,8)",
        "description": "Дюрация к оферте модифицированная",
        "type": "number"
      },
      "exch": {
        "description": "Краткое наименование торговой площадки",
        "type": "string"
      },
      "facevalue": {
        "format": "decimal(38,20)",
        "description": "Номинал",
        "type": "number"
      },
      "facevalue_currency": {
        "description": "Валюта номинала",
        "type": "string"
      },
      "fact_frcst_chng": {
        "format": "double",
        "description": "Абсолютное изменение между фактом и прогнозом",
        "type": "number"
      },
      "forecast": {
        "format": "decimal(16,8)",
        "description": "Прогноз",
        "type": "number"
      },
      "frcst_chng": {
        "format": "double",
        "description": "Абсолютное изменение прогноза",
        "type": "number"
      },
      "high": {
        "format": "decimal(16,8)",
        "description": "Максимальная цена в валюте торгов за текущий торговый день",
        "type": "number"
      },
      "highbid": {
        "format": "double",
        "type": "number"
      },
      "isin": {
        "description": "Код инструмента ISIN",
        "type": "string"
      },
      "issuer": {
        "description": "Эмитент",
        "type": "string"
      },
      "issuesize": {
        "format": "int64",
        "description": "Объем выпуска в штуках",
        "type": "integer"
      },
      "last": {
        "format": "decimal(16,8)",
        "description": "Цена последней сделки в валюте торгов",
        "type": "number"
      },
      "last_quote_time": {
        "format": "date-time",
        "type": "string"
      },
      "last_time": {
        "format": "date-time",
        "description": "Время последней сделки (= ЧЧ.ММ.СС, если в ходе последних торогов, ДД.ММ.ГГ, если ранее)",
        "type": "string"
      },
      "last_trade_time": {
        "format": "date-time",
        "type": "string"
      },
      "last_yield": {
        "format": "decimal(16,8)",
        "description": "Доходность к погашению по последней сделке в % годовых",
        "type": "number"
      },
      "last2avge": {
        "format": "decimal(16,8)",
        "description": "Изменение последней цены к средневзвзвешенной на закрытие предыдущего торгового дня в пунктах",
        "type": "number"
      },
      "lastsettlecode": {
        "description": "Код расчетов последней сделки",
        "type": "string"
      },
      "lclose": {
        "format": "decimal(16,8)",
        "description": "Официальная текущая цена закрытия",
        "type": "number"
      },
      "lcp_chng": {
        "format": "double",
        "type": "number"
      },
      "lcp_chng_pct": {
        "format": "double",
        "type": "number"
      },
      "lcurrentprice": {
        "format": "double",
        "type": "number"
      },
      "lnkcurrency": {
        "type": "string"
      },
      "lotsize": {
        "format": "int64",
        "description": "Лот в штуках",
        "type": "integer"
      },
      "low": {
        "format": "decimal(16,8)",
        "description": "Минимальная цена в валюте торгов за текущий торговый день",
        "type": "number"
      },
      "lowoffer": {
        "format": "double",
        "type": "number"
      },
      "mat_date": {
        "format": "date-time",
        "description": "Дата погашения (экспирации) типа String",
        "type": "string"
      },
      "mcap": {
        "format": "decimal(20,2)",
        "description": "Капитализация (= Рыночная цена * количество бумаг в обращении)",
        "type": "number"
      },
      "mprice": {
        "format": "decimal(16,8)",
        "description": "Рыночная цена3 в валюте торгов, рассчитываемая в соответствии с с Приказом ФСФР от 09 ноября 2010 г. № 10-65/пз-н \"Об утверждении Порядка определения рыночной цены ценных бумаг, расчетной цены ценных бумаг, а также предельной границы колебаний рыночной цены ценных бумаг в целях 23 главы Налогового кодекса Российской Федерации\"",
        "type": "number"
      },
      "mprice2": {
        "format": "decimal(16,8)",
        "description": "Рыночная цена2 в валюте торгов, рассчитываемая в соответствии с Порядком расчета рыночной стоимости активов и стоимости чистых активов, в которые инвестированы средства пенсионных накоплений (утв. приказом Федеральной службы по финансовым рынкам от 26 декабря 2006 г. № 06-155/пз-н) и Порядком расчета рыночной стоимости активов и стоимости чистых активов, в которые инвестированы накопления для жилищного обеспечения военнослужащих (утв. приказом Федеральной службы по финансовым рынкам от 15 декабря 2005 г. № 05-82/пз-н)",
        "type": "number"
      },
      "name": {
        "description": "Краткое наименование инструмента на площадке",
        "type": "string"
      },
      "open": {
        "format": "decimal(16,8)",
        "description": "Цена открытия (обычно = цена первой сделки) в валюте торгов",
        "type": "number"
      },
      "open_inst": {
        "format": "int64",
        "description": "Количество открытых позиций",
        "type": "integer"
      },
      "opprice": {
        "format": "decimal(16,8)",
        "description": "Цена периода открытия в валюте торгов",
        "type": "number"
      },
      "period": {
        "description": "Период в текстовом представлении",
        "type": "string"
      },
      "potential": {
        "format": "decimal(38,8)",
        "description": "Относительное изменение Прогнозной к Рыночной цене",
        "type": "number"
      },
      "prevlclose": {
        "format": "double",
        "type": "number"
      },
      "prevmprice": {
        "format": "decimal(16,8)",
        "description": "Предыдущая рыночная цена цена3 в валюте торгов",
        "type": "number"
      },
      "publication_date": {
        "format": "date-time",
        "description": "Дата публикации факта следующего периода",
        "type": "string"
      },
      "pvbp": {
        "format": "decimal(38,8)",
        "description": "PVBP к погашению",
        "type": "number"
      },
      "pvbp_agg": {
        "format": "decimal(38,8)",
        "description": "PVBP сводная",
        "type": "number"
      },
      "pvbp_o": {
        "format": "decimal(38,8)",
        "description": "PVBP к оферте",
        "type": "number"
      },
      "rec_buy_pct": {
        "format": "decimal(16,2)",
        "description": "Доля рекомендаций \"Покупать\"",
        "type": "number"
      },
      "rec_change": {
        "format": "double",
        "description": "Изменение рекомендации",
        "type": "number"
      },
      "rec_hold_pct": {
        "format": "decimal(16,2)",
        "description": "Доля рекомендаций \"Держать\"",
        "type": "number"
      },
      "rec_sell_pct": {
        "format": "decimal(16,2)",
        "description": "Доля рекомендаций \"Продавать\"",
        "type": "number"
      },
      "rec_val": {
        "format": "decimal(8,1)",
        "description": "Оценка рекомендации в масштабе от -1 до 1",
        "type": "number"
      },
      "recommendation": {
        "description": "Рекомендация по бумаге",
        "type": "string"
      },
      "seccode": {
        "description": "Торговый код инструмента на площадке",
        "type": "string"
      },
      "secname": {
        "description": "Полное русское наименование",
        "type": "string"
      },
      "secname_e": {
        "description": "Полное английское наименование",
        "type": "string"
      },
      "sector": {
        "description": "Сектор",
        "type": "string"
      },
      "settlecode": {
        "description": "Код расчетов (определяет временные параметры сделки)",
        "type": "string"
      },
      "shortname_eng": {
        "description": "Краткое английское наименование",
        "type": "string"
      },
      "shortname_rus": {
        "description": "Краткое русское наименование",
        "type": "string"
      },
      "spread": {
        "format": "decimal(16,8)",
        "description": "Спред",
        "type": "number"
      },
      "status": {
        "description": "Торговый статус инструмента (торгуется ли он на площадке в текущий торговый день)",
        "type": "string"
      },
      "step": {
        "type": "string"
      },
      "target_price": {
        "format": "decimal(18,6)",
        "description": "Прогнозная цена",
        "type": "number"
      },
      "time": {
        "format": "date-time",
        "description": "Время последнего события по инструменту (сделки или котировки)",
        "type": "string"
      },
      "total_return": {
        "format": "decimal(20,8)",
        "description": "Накопленная стоимость",
        "type": "number"
      },
      "tp_chng": {
        "format": "decimal(38,8)",
        "description": "Абсолютное изменение Прогнозной цены",
        "type": "number"
      },
      "tp_chng_m": {
        "format": "decimal(38,8)",
        "description": "Абсолютное изменение Прогнозной цены за месяц",
        "type": "number"
      },
      "tp_chng_m_pct": {
        "format": "decimal(38,8)",
        "description": "Относительное изменение Прогнозной цены за месяц",
        "type": "number"
      },
      "tp_chng_pct": {
        "format": "decimal(38,8)",
        "description": "Относительное изменение Прогнозной цены",
        "type": "number"
      },
      "tp_chng_q": {
        "format": "decimal(38,8)",
        "description": "Относительное изменение Прогнозной цены",
        "type": "number"
      },
      "tp_chng_q_pct": {
        "format": "decimal(38,8)",
        "description": "Относительное изменение Прогнозной цены за 3 месяца",
        "type": "number"
      },
      "tp_chng_time": {
        "format": "date-time",
        "description": "Дата последнего ненулевого изменения Прогнозной цены",
        "type": "string"
      },
      "tp_chng_y": {
        "format": "decimal(38,8)",
        "description": "Абсолютное изменение Прогнозной цены за год",
        "type": "number"
      },
      "tp_chng_y_pct": {
        "format": "decimal(38,8)",
        "description": "Относительное изменение Прогнозной цены за год",
        "type": "number"
      },
      "tp_deviation": {
        "format": "decimal(18,6)",
        "description": "Стандартное отклонение по оценкам Прогнозной цены",
        "type": "number"
      },
      "tp_high": {
        "format": "decimal(18,6)",
        "description": "Максимальная из оценок Прогнозной цены",
        "type": "number"
      },
      "tp_low": {
        "format": "decimal(18,6)",
        "description": "Минимальная из оценок Прогнозной цены",
        "type": "number"
      },
      "tp_median": {
        "format": "decimal(18,6)",
        "description": "Медианная оценка прогнозной цены",
        "type": "number"
      },
      "val": {
        "format": "decimal(32,8)",
        "description": "Оборот последней сделки в валюте торгов (= цена последней сделки * объем последней сделки)",
        "type": "number"
      },
      "val_acc": {
        "format": "decimal(26,2)",
        "description": "Дневной оборот в валюте торгов за текущий торговый день",
        "type": "number"
      },
      "val_acc_usd": {
        "format": "decimal(38,8)",
        "description": "Суммарный оборот в долларах США",
        "type": "number"
      },
      "val_usd": {
        "format": "decimal(38,8)",
        "description": "Оборот последней сделки в долларах США",
        "type": "number"
      },
      "vol": {
        "format": "int64",
        "description": "Объём последней сделки в штуках",
        "type": "integer"
      },
      "vol_acc": {
        "format": "int64",
        "description": "Дневной объем в штуках за текущий торговый день",
        "type": "integer"
      },
      "vol_currency": {
        "description": "Валюта объема",
        "type": "string"
      },
      "vol_lots": {
        "format": "int64",
        "description": "Объем последней сделки в лотах",
        "type": "integer"
      },
      "y2o_ask": {
        "format": "decimal(16,8)",
        "description": "Доходность к оферте по предложению",
        "type": "number"
      },
      "y2o_bid": {
        "format": "decimal(16,8)",
        "description": "Доходность к оферте по спросу",
        "type": "number"
      },
      "y2o_change": {
        "format": "decimal(16,8)",
        "description": "Изменение доходности к оферте абс.",
        "type": "number"
      },
      "y2o_change_pct": {
        "format": "decimal(16,3)",
        "description": "Изменение доходности к оферте отн.",
        "type": "number"
      },
      "y2o_last": {
        "format": "decimal(16,8)",
        "description": "Доходность к оферте по цене последней сделки",
        "type": "number"
      },
      "y2o_prev": {
        "format": "decimal(16,8)",
        "description": "Доходность к оферте по цене пред.дня",
        "type": "number"
      },
      "y2o_wap": {
        "format": "decimal(16,8)",
        "description": "Доходность к оферте по средневзвешенной цене",
        "type": "number"
      },
      "yield_2": {
        "format": "decimal(16,8)",
        "description": "Доходность к аукциону в % годовых",
        "type": "number"
      },
      "yield_agg": {
        "format": "decimal(16,8)",
        "description": "Сводная доходность",
        "type": "number"
      },
      "yield_ask": {
        "format": "decimal(16,8)",
        "description": "Доходность к погашению по предложению",
        "type": "number"
      },
      "yield_average_12m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность за 12 месяцев",
        "type": "number"
      },
      "yield_average_1m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность за 1 месяц",
        "type": "number"
      },
      "yield_average_2m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность за 2 месяца",
        "type": "number"
      },
      "yield_average_2w": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность за 2 недели",
        "type": "number"
      },
      "yield_average_3m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность за 3 месяца",
        "type": "number"
      },
      "yield_average_6m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность за 6 месяцев",
        "type": "number"
      },
      "yield_average_o12m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность к оферте за 12 месяцев",
        "type": "number"
      },
      "yield_average_o1m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность к оферте за 1 месяц",
        "type": "number"
      },
      "yield_average_o2m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность к оферте за 2 месяца",
        "type": "number"
      },
      "yield_average_o2w": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность к оферте за 2 недели",
        "type": "number"
      },
      "yield_average_o3m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность к оферте за 3 месяца",
        "type": "number"
      },
      "yield_average_o6m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность к оферте за 6 месяцев",
        "type": "number"
      },
      "yield_bid": {
        "format": "decimal(16,8)",
        "description": "Доходность к погашению по спросу",
        "type": "number"
      },
      "yield_chng": {
        "format": "decimal(16,8)",
        "description": "Изменение доходности последней сделки к доходности по закрытию предыдущих торгов",
        "type": "number"
      },
      "yield_cpprice": {
        "format": "decimal(16,8)",
        "description": "Доходность к погашению по цене закрытия",
        "type": "number"
      },
      "yield_cwa": {
        "format": "decimal(16,8)",
        "description": "Доходность текущая по средневзвешенной",
        "type": "number"
      },
      "yield_high": {
        "format": "decimal(16,8)",
        "description": "Максимальная доходность",
        "type": "number"
      },
      "yield_low": {
        "format": "decimal(16,8)",
        "description": "Минимальная доходность",
        "type": "number"
      },
      "yield_o_cwa": {
        "format": "decimal(16,8)",
        "description": "Доходность к оферте текущая по средневзвешенной",
        "type": "number"
      },
      "yield_o_swa": {
        "format": "decimal(16,8)",
        "description": "Доходность к оферте простая по средневзвешенной",
        "type": "number"
      },
      "yield_open": {
        "format": "decimal(16,8)",
        "description": "Доходность первой сделки",
        "type": "number"
      },
      "yield_prev": {
        "format": "decimal(16,8)",
        "description": "Доходность к погашению по цене пред. дня",
        "type": "number"
      },
      "yield_swa": {
        "format": "decimal(16,8)",
        "description": "Доходность простая по средневзвешенной",
        "type": "number"
      },
      "full_price_pct": {
        "format": "decimal(20,8)",
        "description": "Полная цена, %",
        "type": "number"
      },
      "z_spread_ofz": {
        "format": "decimal(20,8)",
        "description": "Z-спрэд к ОФЗ",
        "type": "number"
      }
    }
  },
  "Requests.V2.Archive.HistoryRequest": {
    "required": [
      "dateFrom",
      "dateTo",
      "step"
    ],
    "type": "object",
    "properties": {
      "issId": {
        "format": "int64",
        "description": "Идентификатор инструмента",
        "type": "integer"
      },
      "isin": {
        "description": "ISIN",
        "type": "string"
      },
      "dateFrom": {
        "format": "date-time",
        "description": "Дата начала периода",
        "type": "string"
      },
      "dateTo": {
        "format": "date-time",
        "description": "Дата окончания периода",
        "type": "string"
      },
      "step": {
        "description": "Шаг 5 – 5-минутки; 30 – получасовики; 60 – часовики; 1440 – EndOfDay",
        "type": "string"
      },
      "rowNum": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.",
        "type": "integer"
      },
      "fields": {
        "description": "Список кодовых наименований полей, колонка name из выходной таблицы метода /Info/Fields. По умолчанию выводятся все доступные поля.",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "official": {
        "description": "Запрос официальных итогов:\r\n1 – запрашивать официальные итоги",
        "type": "boolean"
      },
      "sort": {
        "description": "Сортировка по указанному полю,  в виде FIELD=[A|D], например \"TIME=D\" - сортировка по убыванию значений поля TIME.\r\nПо умолчанию TIME=A",
        "type": "string"
      },
      "tradeSite": {
        "description": "Идентификатор ID из справочника «Торговые площадки» или код режима торгов МБ. Используется для уточнения указанного Isin",
        "type": "string"
      }
    }
  },
  "Archive.HistoryOfficialFullFieldsV2": {
    "type": "object",
    "properties": {
      "time": {
        "format": "date-time",
        "description": "Время последнего события по инструменту (сделки или котировки)",
        "type": "string"
      },
      "mat_date": {
        "format": "date-time",
        "type": "string"
      },
      "time_dt": {
        "format": "date-time",
        "type": "string",
        "readOnly": true
      },
      "accruedint": {
        "format": "double",
        "description": "Накопленный купонный доход (= ставка купона * количество дней с момента начала очередного купонного периода)",
        "type": "number"
      },
      "admquote": {
        "format": "double",
        "description": "Признаваемая котировка, рассчитываемая в соответствии Положением о порядке и сроках определения стоимости чистых активов акционерных инвестиционных фондов, стоимости чистых активов паевых инвестиционных фондов, расчетной стоимости инвестиционных паев паевых инвестиционных фондов, а также стоимости чистых активов акционерных инвестиционных фондов в расчете на одну акцию (утв. приказом Федеральной службы по финансовым рынкам от 15 июня 2005 г. № 05-21/пз-н)",
        "type": "number"
      },
      "akm_bl_n": {
        "type": "string"
      },
      "akm_e_n": {
        "type": "string"
      },
      "ask": {
        "format": "double",
        "description": "Лучшая цена продажи в валюте торгов",
        "type": "number"
      },
      "ask_size": {
        "format": "int64",
        "description": "Объем по лучшей цене продажи в штуках",
        "type": "integer"
      },
      "ask_size_total": {
        "format": "double",
        "description": "Полный объем предложения",
        "type": "number"
      },
      "avge_chng": {
        "format": "double",
        "description": "Изменение средневзвешенной цены за текущий торговый день к средневзвешенной цене предыдущего торгового дня в пунктах (= средневзвешенная цена - цена закрытия предыдущего торгового дня)",
        "type": "number"
      },
      "avge_chng_pct": {
        "format": "double",
        "description": "Относительное изменение средневзвешенной цены к средневзвешенной предыдущего дня в % (= Средневзвешенная цена / Средневзвешенная цена на закрытие предыдущего торгового дня - 1)",
        "type": "number"
      },
      "avge_prce": {
        "format": "double",
        "description": "Средневзвешенная цена за текущий торговый день",
        "type": "number"
      },
      "avge_yield": {
        "format": "double",
        "description": "Доходность по средневзвешенной цене текущего торгового дня",
        "type": "number"
      },
      "bid": {
        "format": "double",
        "description": "Лучшая цена покупки в валюте торгов",
        "type": "number"
      },
      "bid_size": {
        "format": "int64",
        "description": "Объем по лучшей цене покупки в штуках",
        "type": "integer"
      },
      "bid_size_total": {
        "format": "double",
        "description": "Полный объем спроса",
        "type": "number"
      },
      "boardid": {
        "description": "Код режима торгов",
        "type": "string"
      },
      "boardname": {
        "description": "Режим торгов и/или Котировальный лист",
        "type": "string"
      },
      "buybackdate": {
        "format": "date-time",
        "description": "Дата обратного выкупа",
        "type": "string"
      },
      "buybackprice": {
        "format": "double",
        "description": "Дата обратного выкупа",
        "type": "number"
      },
      "cbr_lombard": {
        "format": "double",
        "description": "Ломбард",
        "type": "number"
      },
      "cbr_pledge": {
        "format": "double",
        "description": "Залог РЕПО",
        "type": "number"
      },
      "chng": {
        "format": "double",
        "description": "Изменение цены последней сделки к цене закрытия предыдущего дня в пунктах (= цена последней сделки - цена закрытия предыдущего торгового дня)",
        "type": "number"
      },
      "chng_m": {
        "format": "double",
        "description": "Изменение цены последней сделки к цене закрытия месяц назад в пунктах",
        "type": "number"
      },
      "chng_m_pct": {
        "format": "double",
        "description": "Относительное изменение цены последней сделки к цене закрытия месяц назад в %",
        "type": "number"
      },
      "chng_pct": {
        "format": "double",
        "description": "Относительное изменение цены последней сделки к цене закрытия предыдущего дня в % (= Цена последней сделки / Цена закрытия предыдущего торгового дня - 1)",
        "type": "number"
      },
      "chng_w": {
        "format": "double",
        "description": "Изменение цены последней сделки к цене закрытия неделю назад в пунктах",
        "type": "number"
      },
      "chng_w_pct": {
        "format": "double",
        "description": "Относительное изменение цены последней сделки к цене закрытия неделю назад в %",
        "type": "number"
      },
      "chng_y": {
        "format": "double",
        "description": "Изменение цены последней сделки к цене закрытия год назад в пунктах",
        "type": "number"
      },
      "chng_y_pct": {
        "format": "double",
        "description": "Относительное изменение цены последней сделки к цене закрытия год назад в %",
        "type": "number"
      },
      "close": {
        "format": "double",
        "description": "Цена закрытия предыдущего дня в валюте торгов",
        "type": "number"
      },
      "consensus_num_est": {
        "format": "int32",
        "description": "Количество рекомендаций",
        "type": "integer"
      },
      "consensus_time": {
        "format": "date-time",
        "description": "Дата последней оценки (подтверждение , изменение и т.д.)",
        "type": "string"
      },
      "convexity": {
        "format": "double",
        "description": "Выпуклость к погашению",
        "type": "number"
      },
      "convexity_agg": {
        "format": "double",
        "description": "Выпуклость сводная",
        "type": "number"
      },
      "convexity_o": {
        "format": "double",
        "description": "Выпуклость к оферте",
        "type": "number"
      },
      "cpn": {
        "format": "double",
        "description": "Размер ближайшего купона (облигации)",
        "type": "number"
      },
      "cpn_date": {
        "format": "date-time",
        "description": "Дата очередной купонной выплаты (облигации)",
        "type": "string"
      },
      "cpn_period": {
        "format": "int64",
        "description": "Купонный период в днях",
        "type": "integer"
      },
      "cpprice": {
        "format": "double",
        "description": "Цена периода закрытия в валюте торгов",
        "type": "number"
      },
      "currency": {
        "description": "Валюта цены",
        "type": "string"
      },
      "vol_currency": {
        "description": "Валюта объема",
        "type": "string"
      },
      "deal_acc": {
        "format": "int64",
        "description": "Количество сделок за текущий торговый день",
        "type": "integer"
      },
      "discount": {
        "format": "double",
        "description": "Дисконт",
        "type": "number"
      },
      "dnt06beg": {
        "format": "double",
        "description": "Начальный дисконт для сроков РЕПО до 6 дней",
        "type": "number"
      },
      "dnt06max": {
        "format": "double",
        "description": "Максимальный дисконт для сроков РЕПО до 6 дней",
        "type": "number"
      },
      "dnt06min": {
        "format": "double",
        "description": "Минимальный дисконт для сроков РЕПО до 6 дней",
        "type": "number"
      },
      "dnt120beg": {
        "format": "double",
        "description": "Начальный дисконт для сроков РЕПО от 15 до 90 дней",
        "type": "number"
      },
      "dnt120max": {
        "format": "double",
        "description": "Максимальный дисконт для сроков РЕПО от 15 до 90 дней",
        "type": "number"
      },
      "dnt120min": {
        "format": "double",
        "description": "Минимальный дисконт для сроков РЕПО от 15 до 90 дней",
        "type": "number"
      },
      "dnt14beg": {
        "format": "double",
        "description": "Начальный дисконт для сроков РЕПО от 7 до 14 дней",
        "type": "number"
      },
      "dnt14max": {
        "format": "double",
        "description": "Максимальный дисконт для сроков РЕПО от 7 до 14 дней",
        "type": "number"
      },
      "dnt14min": {
        "format": "double",
        "description": "Минимальный дисконт для сроков РЕПО от 7 до 14 дней",
        "type": "number"
      },
      "dnt200beg": {
        "format": "double",
        "description": "Начальный дисконт для сроков РЕПО от 91 до 180 дней",
        "type": "number"
      },
      "dnt200max": {
        "format": "double",
        "description": "Максимальный дисконт для сроков РЕПО от 91 до 180 дней",
        "type": "number"
      },
      "dnt200min": {
        "format": "double",
        "description": "Минимальный дисконт для сроков РЕПО от 91 до 180 дней",
        "type": "number"
      },
      "dnt365beg": {
        "format": "double",
        "description": "Начальный дисконт для сроков РЕПО от 201 до 365 дней",
        "type": "number"
      },
      "dnt365max": {
        "format": "double",
        "description": "Максимальный дисконт для сроков РЕПО от 201 до 365 дней",
        "type": "number"
      },
      "dnt365min": {
        "format": "double",
        "description": "Минимальный дисконт для сроков РЕПО от 201 до 365 дней",
        "type": "number"
      },
      "duration": {
        "format": "int64",
        "description": "Дюрация по Маколею",
        "type": "integer"
      },
      "duration_agg": {
        "format": "int64",
        "description": "Сводная дюрация",
        "type": "integer"
      },
      "duration_n": {
        "format": "double",
        "description": "Дюрация к погашению модифицированная",
        "type": "number"
      },
      "duration_o": {
        "format": "int64",
        "description": "Дюрация к оферте",
        "type": "integer"
      },
      "duration_on": {
        "format": "double",
        "description": "Дюрация к оферте модифицированная",
        "type": "number"
      },
      "exch": {
        "description": "Краткое наименование торговой площадки",
        "type": "string"
      },
      "exp_bl_n": {
        "type": "string"
      },
      "exp_e_n": {
        "type": "string"
      },
      "facevalue": {
        "format": "double",
        "description": "Номинал",
        "type": "number"
      },
      "facevalue_currency": {
        "description": "Валюта номинала",
        "type": "string"
      },
      "fact_frcst_chng": {
        "description": "Абсолютное изменение между фактом и прогнозом",
        "type": "string"
      },
      "fch_b_i": {
        "description": "",
        "type": "string"
      },
      "fch_b_n": {
        "type": "string"
      },
      "fch_e_dlti": {
        "type": "string"
      },
      "fch_e_lti": {
        "type": "string"
      },
      "forecast": {
        "format": "double",
        "description": "Прогноз",
        "type": "number"
      },
      "frcst_chng": {
        "description": "Абсолютное изменение прогноза",
        "type": "string"
      },
      "high": {
        "format": "double",
        "description": "Максимальная цена в валюте торгов за текущий торговый день",
        "type": "number"
      },
      "highbid": {
        "format": "double",
        "type": "number"
      },
      "lowoffer": {
        "format": "double",
        "type": "number"
      },
      "ifx_b_i": {
        "description": "",
        "type": "string"
      },
      "ifx_b_n": {
        "type": "string"
      },
      "ifx_e_i": {
        "type": "string"
      },
      "ifx_e_n": {
        "type": "string"
      },
      "isin": {
        "description": "Код инструмента ISIN",
        "type": "string"
      },
      "issuer": {
        "description": "Эмитент",
        "type": "string"
      },
      "issuesize": {
        "format": "int64",
        "description": "Объем выпуска в штуках",
        "type": "integer"
      },
      "last": {
        "format": "double",
        "description": "Цена последней сделки в валюте торгов",
        "type": "number"
      },
      "last_time": {
        "format": "date-time",
        "description": "Время последней сделки (= ЧЧ.ММ.СС, если в ходе последних торгов, ДД.ММ.ГГ, если ранее)",
        "type": "string"
      },
      "last_yield": {
        "format": "double",
        "description": "Доходность к погашению по последней сделке в % годовых",
        "type": "number"
      },
      "last2avge": {
        "format": "double",
        "description": "Изменение последней цены к средневзвешенной на закрытие предыдущего торгового дня в пунктах",
        "type": "number"
      },
      "lastsettlecode": {
        "description": "Код расчетов последней сделки",
        "type": "string"
      },
      "lclose": {
        "format": "double",
        "description": "Официальная текущая цена закрытия",
        "type": "number"
      },
      "lnkcurrency": {
        "description": "Сопряженная валюта",
        "type": "string"
      },
      "lotsize": {
        "format": "int64",
        "description": "Лот в штуках",
        "type": "integer"
      },
      "low": {
        "format": "double",
        "description": "Минимальная цена в валюте торгов за текущий торговый день",
        "type": "number"
      },
      "mcap": {
        "format": "decimal(20,2)",
        "description": "Капитализация (= Рыночная цена * количество бумаг в обращении)",
        "type": "number"
      },
      "mds_b_i": {
        "description": "",
        "type": "string"
      },
      "mds_b_n": {
        "type": "string"
      },
      "mds_e_lti": {
        "type": "string"
      },
      "mds_e_ltn": {
        "type": "string"
      },
      "mprice": {
        "format": "double",
        "description": "Рыночная цена3 в валюте торгов, рассчитываемая в соответствии с с Приказом ФСФР от 09 ноября 2010 г. № 10-65/пз-н \"Об утверждении Порядка определения рыночной цены ценных бумаг, расчетной цены ценных бумаг, а также предельной границы колебаний рыночной цены ценных бумаг в целях 23 главы Налогового кодекса Российской Федерации\"",
        "type": "number"
      },
      "mprice2": {
        "format": "double",
        "description": "Рыночная цена2 в валюте торгов, рассчитываемая в соответствии с Порядком расчета рыночной стоимости активов и стоимости чистых активов, в которые инвестированы средства пенсионных накоплений (утв. приказом Федеральной службы по финансовым рынкам от 26 декабря 2006 г. № 06-155/пз-н) и Порядком расчета рыночной стоимости активов и стоимости чистых активов, в которые инвестированы накопления для жилищного обеспечения военнослужащих (утв. приказом Федеральной службы по финансовым рынкам от 15 декабря 2005 г. № 05-82/пз-н)",
        "type": "number"
      },
      "name": {
        "description": "Краткое наименование инструмента на площадке",
        "type": "string"
      },
      "open": {
        "format": "double",
        "description": "Цена открытия (обычно = цена первой сделки) в валюте торгов",
        "type": "number"
      },
      "open_inst": {
        "format": "int64",
        "description": "Количество открытых позиций",
        "type": "integer"
      },
      "opprice": {
        "format": "double",
        "description": "Цена периода открытия в валюте торгов",
        "type": "number"
      },
      "period": {
        "description": "Период в текстовом представлении",
        "type": "string"
      },
      "potential": {
        "format": "double",
        "description": "Относительное изменение Прогнозной к Рыночной цене",
        "type": "number"
      },
      "prevmprice": {
        "format": "double",
        "description": "Предыдущая рыночная цена цена3 в валюте торгов",
        "type": "number"
      },
      "publication_date": {
        "format": "date-time",
        "description": "Дата публикации факта следующего периода",
        "type": "string"
      },
      "pvbp": {
        "format": "double",
        "description": "PVBP к погашению",
        "type": "number"
      },
      "pvbp_agg": {
        "format": "double",
        "description": "PVBP сводная",
        "type": "number"
      },
      "pvbp_o": {
        "format": "double",
        "description": "PVBP к оферте",
        "type": "number"
      },
      "rec_buy_pct": {
        "format": "double",
        "description": "Доля рекомендаций \"Покупать\"",
        "type": "number"
      },
      "rec_change": {
        "format": "int32",
        "description": "Изменение рекомендации",
        "type": "integer"
      },
      "rec_hold_pct": {
        "format": "double",
        "description": "Доля рекомендаций \"Держать\"",
        "type": "number"
      },
      "rec_sell_pct": {
        "format": "double",
        "description": "Доля рекомендаций \"Продавать\"",
        "type": "number"
      },
      "rec_val": {
        "format": "double",
        "description": "Оценка рекомендации в масштабе от -1 до 1",
        "type": "number"
      },
      "recommendation": {
        "description": "Рекомендация по бумаге",
        "type": "string"
      },
      "rus_b_n": {
        "type": "string"
      },
      "rus_e_i": {
        "type": "string"
      },
      "rus_e_n": {
        "type": "string"
      },
      "seccode": {
        "description": "Торговый код инструмента на площадке",
        "type": "string"
      },
      "secname": {
        "description": "Полное русское наименование",
        "type": "string"
      },
      "secname_e": {
        "description": "Полное английское наименование",
        "type": "string"
      },
      "sector": {
        "description": "Сектор",
        "type": "string"
      },
      "settlecode": {
        "description": "Код расчетов (определяет временные параметры сделки)",
        "type": "string"
      },
      "shortname_eng": {
        "description": "Краткое английское наименование",
        "type": "string"
      },
      "shortname_rus": {
        "description": "Краткое русское наименование",
        "type": "string"
      },
      "snp_b_i": {
        "description": "",
        "type": "string"
      },
      "snp_b_n": {
        "type": "string"
      },
      "snp_e_lti": {
        "type": "string"
      },
      "snp_e_n": {
        "type": "string"
      },
      "spread": {
        "format": "double",
        "description": "Спред",
        "type": "number"
      },
      "status": {
        "description": "Торговый статус инструмента (торгуется ли он на площадке в текущий торговый день)",
        "type": "string"
      },
      "target_price": {
        "format": "double",
        "description": "Прогнозная цена",
        "type": "number"
      },
      "tick_acc": {
        "description": "Количество изменений",
        "type": "string"
      },
      "tp_chng": {
        "format": "double",
        "description": "Абсолютное изменение Прогнозной цены",
        "type": "number"
      },
      "tp_chng_m": {
        "format": "double",
        "description": "Абсолютное изменение Прогнозной цены за месяц",
        "type": "number"
      },
      "tp_chng_m_pct": {
        "format": "double",
        "description": "Относительное изменение Прогнозной цены за месяц",
        "type": "number"
      },
      "tp_chng_pct": {
        "format": "double",
        "description": "Относительное изменение Прогнозной цены",
        "type": "number"
      },
      "tp_chng_q": {
        "format": "double",
        "description": "Относительное изменение Прогнозной цены",
        "type": "number"
      },
      "tp_chng_q_pct": {
        "format": "double",
        "description": "Относительное изменение Прогнозной цены за 3 месяца",
        "type": "number"
      },
      "tp_chng_time": {
        "format": "date-time",
        "description": "Дата последнего ненулевого изменения Прогнозной цены",
        "type": "string"
      },
      "tp_chng_y": {
        "format": "double",
        "description": "Абсолютное изменение Прогнозной цены за год",
        "type": "number"
      },
      "tp_chng_y_pct": {
        "format": "double",
        "description": "Относительное изменение Прогнозной цены за год",
        "type": "number"
      },
      "tp_deviation": {
        "format": "double",
        "description": "Стандартное отклонение по оценкам Прогнозной цены",
        "type": "number"
      },
      "tp_high": {
        "format": "double",
        "description": "Максимальная из оценок Прогнозной цены",
        "type": "number"
      },
      "tp_low": {
        "format": "double",
        "description": "Минимальная из оценок Прогнозной цены",
        "type": "number"
      },
      "tp_median": {
        "format": "double",
        "description": "Медианная оценка прогнозной цены",
        "type": "number"
      },
      "val": {
        "format": "double",
        "description": "Оборот последней сделки в валюте торгов (= цена последней сделки * объем последней сделки)",
        "type": "number"
      },
      "val_acc": {
        "format": "double",
        "description": "Дневной оборот в валюте торгов за текущий торговый день",
        "type": "number"
      },
      "val_acc_usd": {
        "format": "double",
        "description": "Суммарный оборот в долларах США",
        "type": "number"
      },
      "val_usd": {
        "format": "double",
        "description": "Оборот последней сделки в долларах США",
        "type": "number"
      },
      "vol": {
        "format": "int64",
        "description": "Объём последней сделки в штуках",
        "type": "integer"
      },
      "vol_acc": {
        "format": "int64",
        "description": "Дневной объем в штуках за текущий торговый день",
        "type": "integer"
      },
      "vol_lots": {
        "format": "double",
        "description": "Объем последней сделки в лотах",
        "type": "number"
      },
      "y2o_ask": {
        "format": "double",
        "description": "Доходность к оферте по предложению",
        "type": "number"
      },
      "y2o_bid": {
        "format": "double",
        "description": "Доходность к оферте по спросу",
        "type": "number"
      },
      "y2o_change": {
        "format": "double",
        "description": "Изменение доходности к оферте абс.",
        "type": "number"
      },
      "y2o_change_pct": {
        "format": "double",
        "description": "Изменение доходности к оферте отн.",
        "type": "number"
      },
      "y2o_last": {
        "format": "double",
        "description": "Доходность к оферте по цене последней сделки",
        "type": "number"
      },
      "y2o_prev": {
        "format": "double",
        "description": "Доходность к оферте по цене пред.дня",
        "type": "number"
      },
      "y2o_wap": {
        "format": "double",
        "description": "Доходность к оферте по средневзвешенной цене",
        "type": "number"
      },
      "yield_2": {
        "format": "double",
        "description": "Доходность к аукциону в % годовых",
        "type": "number"
      },
      "yield_agg": {
        "format": "double",
        "description": "Сводная доходность",
        "type": "number"
      },
      "yield_ask": {
        "format": "double",
        "description": "Доходность к погашению по предложению",
        "type": "number"
      },
      "yield_average_12m": {
        "format": "double",
        "description": "Средняя доходность за 12 месяцев",
        "type": "number"
      },
      "yield_average_1m": {
        "format": "double",
        "description": "Средняя доходность за 1 месяц",
        "type": "number"
      },
      "yield_average_2m": {
        "format": "double",
        "description": "Средняя доходность за 2 месяца",
        "type": "number"
      },
      "yield_average_2w": {
        "format": "double",
        "description": "Средняя доходность за 2 недели",
        "type": "number"
      },
      "yield_average_3m": {
        "format": "double",
        "description": "Средняя доходность за 3 месяца",
        "type": "number"
      },
      "yield_average_6m": {
        "format": "double",
        "description": "Средняя доходность за 6 месяцев",
        "type": "number"
      },
      "yield_average_o12m": {
        "format": "double",
        "description": "Средняя доходность к оферте за 12 месяцев",
        "type": "number"
      },
      "yield_average_o1m": {
        "format": "double",
        "description": "Средняя доходность к оферте за 1 месяц",
        "type": "number"
      },
      "yield_average_o2m": {
        "format": "double",
        "description": "Средняя доходность к оферте за 2 месяца",
        "type": "number"
      },
      "yield_average_o2w": {
        "format": "double",
        "description": "Средняя доходность к оферте за 2 недели",
        "type": "number"
      },
      "yield_average_o3m": {
        "format": "double",
        "description": "Средняя доходность к оферте за 3 месяца",
        "type": "number"
      },
      "yield_average_o6m": {
        "format": "double",
        "description": "Средняя доходность к оферте за 6 месяцев",
        "type": "number"
      },
      "yield_bid": {
        "format": "double",
        "description": "Доходность к погашению по спросу",
        "type": "number"
      },
      "yield_chng": {
        "format": "double",
        "description": "Изменение доходности последней сделки к доходности по закрытию предыдущих торгов",
        "type": "number"
      },
      "yield_cpprice": {
        "format": "double",
        "description": "Доходность к погашению по цене закрытия",
        "type": "number"
      },
      "yield_cwa": {
        "format": "double",
        "description": "Доходность текущая по средневзвешенной",
        "type": "number"
      },
      "yield_high": {
        "format": "double",
        "description": "Максимальная доходность",
        "type": "number"
      },
      "yield_low": {
        "format": "double",
        "description": "Минимальная доходность",
        "type": "number"
      },
      "yield_o_cwa": {
        "format": "double",
        "description": "Доходность к оферте текущая по средневзвешенной",
        "type": "number"
      },
      "yield_o_swa": {
        "format": "double",
        "description": "Доходность к оферте простая по средневзвешенной",
        "type": "number"
      },
      "yield_open": {
        "format": "double",
        "description": "Доходность первой сделки",
        "type": "number"
      },
      "yield_prev": {
        "format": "double",
        "description": "Доходность к погашению по цене пред. дня",
        "type": "number"
      },
      "yield_swa": {
        "format": "double",
        "description": "Доходность простая по средневзвешенной",
        "type": "number"
      }
    }
  },
  "Requests.V2.Archive.MultiHistoryRequest": {
    "required": [
      "instruments",
      "fields",
      "dateTo",
      "step"
    ],
    "type": "object",
    "properties": {
      "instruments": {
        "description": "список входных идентификаторов инструментов, могут использоваться: ID_ISS - внутренние идентификаторы ЭФИР, SYMBOL - код ЭФИР инструмента на площадке, FinToolID там, где определена связь FinToolID - основная площадка, ISIN, RegCode или NRDcode",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "fields": {
        "description": "список имен полей разделенных запятой",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "dateFrom": {
        "format": "date-time",
        "description": "Дата и время начала периода",
        "type": "string"
      },
      "dateTo": {
        "format": "date-time",
        "description": "Дата и время окончания периода",
        "type": "string"
      },
      "step": {
        "description": "шаг загружаемых данных: 1DO - день(официальные итоги); 1D - день; 1H - час; 30MIN - 30 минут; 5MIN - 5 минут; 1MIN - 1 минута; TICK - тики; TRADE – сделки",
        "type": "string"
      },
      "grouping": {
        "format": "int32",
        "description": "Группировка\r\n 0 – по дате и времени (данные в выходном курсоре сортируются сначала по времени, а затем по инструменту). 1 – по инструменту(данные сортируются сначала по инструменту, а затем по времени). Порядок следования инструментов должен соответствовать входному массиву.",
        "type": "integer"
      },
      "sort": {
        "description": "Направление сортировки по времени. Возможные значения: “A” – по возрастанию, “D” – по убыванию",
        "type": "string"
      },
      "filterByPrice": {
        "format": "int32",
        "description": "Режим фильтрации по цене. В этом режиме, каждый интервал времени (шаг) проверяется на наличие ценовых данных у всех инструментов. \r\nЕсли среди полей есть любое из Open, High, Low, Last, Avge_Price, то достаточно наличия данных в одном из них. \r\nЕсли же ни одно из этих полей не выбрано пользователем, но есть поле Bid или Ask, то проверяется наличие данных в них. \r\nВ противном случае, фильтр не действует. Возможнные значения: 0 – без фильтрации, 1 – с фильтрацией",
        "type": "integer"
      },
      "filterByTime": {
        "format": "int32",
        "description": "Режим фильтрации записей по времени. Возможные значения:\r\n0 - Без фильтрации(по-умолчанию) – показываются все данные.\r\n1 - Предторговый период Мосбиржи – не показываются данные предторгового периода.\r\n2 - Предторговый и послеторговый периоды Мосбиржи – оставляются только данные за торговый период, а всё что до него и после – не показывается.",
        "type": "integer"
      }
    }
  },
  "Archive.MultiHistoryGroup": {
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      },
      "name": {
        "type": "string"
      },
      "secCode": {
        "type": "string"
      },
      "idIss": {
        "format": "int64",
        "type": "integer"
      },
      "history": {
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Archive.MultiHistoryFields"
        }
      }
    }
  },
  "Archive.MultiHistoryFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int64",
        "type": "integer"
      },
      "accruedint": {
        "format": "decimal(20,8)",
        "description": "Накопленный купонный доход (= ставка купона * количество дней с момента начала очередного купонного периода)",
        "type": "number"
      },
      "admquote": {
        "format": "decimal(16,8)",
        "description": "Признаваемая котировка, рассчитываемая в соответствии Положением о порядке и сроках определения стоимости чистых активов акционерных инвестиционных фондов, стоимости чистых активов паевых инвестиционных фондов, расчетной стоимости инвестиционных паев паевых инвестиционных фондов, а также стоимости чистых активов акционерных инвестиционных фондов в расчете на одну акцию (утв. приказом Федеральной службы по финансовым рынкам от 15 июня 2005 г. № 05-21/пз-н)",
        "type": "number"
      },
      "akm_bl_n": {
        "type": "string"
      },
      "akm_e_n": {
        "type": "string"
      },
      "ask": {
        "format": "decimal(16,8)",
        "description": "Лучшая цена продажи в валюте торгов",
        "type": "number"
      },
      "ask_size": {
        "format": "int64",
        "description": "Объем по лучшей цене продажи в штуках",
        "type": "integer"
      },
      "ask_size_total": {
        "format": "int64",
        "description": "Полный объем предложения",
        "type": "integer"
      },
      "avge_chng": {
        "format": "decimal(16,2)",
        "description": "Изменение средневзвешенной цены за текущий торговый день к средневзвешенной цене предыдущего торгового дня в пунктах (= средневзвешенная цена - цена закрытия предыдущего торгового дня)",
        "type": "number"
      },
      "avge_chng_pct": {
        "format": "decimal(16,2)",
        "description": "Относительное изменение средневзвешенной цены к средневзвешенной предыдущего дня в % (= Средневзвешенная цена / Средневзвешенная цена на закрытие предыдущего торгового дня - 1)",
        "type": "number"
      },
      "avge_prce": {
        "format": "decimal(16,8)",
        "description": "Средневзвешенная цена за текущий торговый день",
        "type": "number"
      },
      "avge_yield": {
        "format": "decimal(16,8)",
        "description": "Доходность по средневзвешенной цене текущего торгового дня",
        "type": "number"
      },
      "bid": {
        "format": "decimal(16,8)",
        "description": "Лучшая цена покупки в валюте торгов",
        "type": "number"
      },
      "bid_size": {
        "format": "int64",
        "description": "Объем по лучшей цене покупки в штуках",
        "type": "integer"
      },
      "bid_size_total": {
        "format": "int64",
        "description": "Полный объем спроса",
        "type": "integer"
      },
      "boardid": {
        "description": "Код режима торгов",
        "type": "string"
      },
      "boardname": {
        "description": "Режим торгов и/или Котировальный лист",
        "type": "string"
      },
      "buybackdate": {
        "format": "date-time",
        "description": "Дата обратного выкупа",
        "type": "string"
      },
      "buybackprice": {
        "format": "decimal(16,8)",
        "description": "Дата обратного выкупа",
        "type": "number"
      },
      "cbr_lombard": {
        "format": "decimal(16,8)",
        "description": "Ломбард",
        "type": "number"
      },
      "cbr_pledge": {
        "format": "decimal(16,8)",
        "description": "Залог РЕПО",
        "type": "number"
      },
      "chng": {
        "format": "decimal(16,8)",
        "description": "Изменение цены последней сделки к цене закрытия предыдущего дня в пунктах (= цена последней сделки - цена закрытия предыдущего торгового дня)",
        "type": "number"
      },
      "chng_m": {
        "format": "decimal(16,8)",
        "description": "Изменение цены последней сделки к цене закрытия месяц назад в пунктах",
        "type": "number"
      },
      "chng_m_pct": {
        "format": "decimal(16,2)",
        "description": "Относительное изменение цены последней сделки к цене закрытия месяц назад в %",
        "type": "number"
      },
      "chng_pct": {
        "format": "decimal(16,2)",
        "description": "Относительное изменение цены последней сделки к цене закрытия предыдущего дня в % (= Цена последней сделки / Цена закрытия предыдущего торгового дня - 1)",
        "type": "number"
      },
      "chng_w": {
        "format": "decimal(16,8)",
        "description": "Изменение цены последней сделки к цене закрытия неделю назад в пунктах",
        "type": "number"
      },
      "chng_w_pct": {
        "format": "decimal(16,2)",
        "description": "Относительное изменение цены последней сделки к цене закрытия неделю назад в %",
        "type": "number"
      },
      "chng_y": {
        "format": "decimal(16,8)",
        "description": "Изменение цены последней сделки к цене закрытия год назад в пунктах",
        "type": "number"
      },
      "chng_y_pct": {
        "format": "decimal(16,2)",
        "description": "Относительное изменение цены последней сделки к цене закрытия год назад в %",
        "type": "number"
      },
      "close": {
        "format": "decimal(16,8)",
        "description": "Цена закрытия предыдущего дня в валюте торгов",
        "type": "number"
      },
      "consensus_num_est": {
        "format": "int32",
        "description": "Количество рекомендаций",
        "type": "integer"
      },
      "consensus_time": {
        "format": "date-time",
        "description": "Дата последней оценки (подтверждение , изменение и т.д.)",
        "type": "string"
      },
      "convexity": {
        "format": "decimal(16,8)",
        "description": "Выпуклость к погашению",
        "type": "number"
      },
      "convexity_agg": {
        "format": "decimal(16,8)",
        "description": "Выпуклость сводная",
        "type": "number"
      },
      "convexity_o": {
        "format": "decimal(16,8)",
        "description": "Выпуклость к оферте",
        "type": "number"
      },
      "cpn": {
        "format": "decimal(16,8)",
        "description": "Размер ближайшего купона (облигации)",
        "type": "number"
      },
      "cpn_date": {
        "format": "date-time",
        "description": "Дата очередной купонной выплаты (облигации)",
        "type": "string"
      },
      "cpn_period": {
        "format": "int64",
        "description": "Купонный период в днях",
        "type": "integer"
      },
      "cpprice": {
        "format": "decimal(16,8)",
        "description": "Цена периода закрытия в валюте торгов",
        "type": "number"
      },
      "deal_acc": {
        "format": "int64",
        "description": "Количество сделок за текущий торговый день",
        "type": "integer"
      },
      "discount": {
        "format": "decimal(16,8)",
        "description": "Дисконт",
        "type": "number"
      },
      "dnt06beg": {
        "format": "decimal(16,8)",
        "description": "Начальный дисконт для сроков РЕПО до 6 дней",
        "type": "number"
      },
      "dnt06max": {
        "format": "decimal(16,8)",
        "description": "Максимальный дисконт для сроков РЕПО до 6 дней",
        "type": "number"
      },
      "dnt06min": {
        "format": "decimal(16,8)",
        "description": "Минимальный дисконт для сроков РЕПО до 6 дней",
        "type": "number"
      },
      "dnt120beg": {
        "format": "decimal(16,8)",
        "description": "Начальный дисконт для сроков РЕПО от 15 до 90 дней",
        "type": "number"
      },
      "dnt120max": {
        "format": "decimal(16,8)",
        "description": "Максимальный дисконт для сроков РЕПО от 15 до 90 дней",
        "type": "number"
      },
      "dnt120min": {
        "format": "decimal(16,8)",
        "description": "Минимальный дисконт для сроков РЕПО от 15 до 90 дней",
        "type": "number"
      },
      "dnt14beg": {
        "format": "decimal(16,8)",
        "description": "Начальный дисконт для сроков РЕПО от 7 до 14 дней",
        "type": "number"
      },
      "dnt14max": {
        "format": "decimal(16,8)",
        "description": "Максимальный дисконт для сроков РЕПО от 7 до 14 дней",
        "type": "number"
      },
      "dnt14min": {
        "format": "decimal(16,8)",
        "description": "Минимальный дисконт для сроков РЕПО от 7 до 14 дней",
        "type": "number"
      },
      "dnt200beg": {
        "format": "decimal(16,8)",
        "description": "Начальный дисконт для сроков РЕПО от 91 до 180 дней",
        "type": "number"
      },
      "dnt200max": {
        "format": "decimal(16,8)",
        "description": "Максимальный дисконт для сроков РЕПО от 91 до 180 дней",
        "type": "number"
      },
      "dnt200min": {
        "format": "decimal(16,8)",
        "description": "Минимальный дисконт для сроков РЕПО от 91 до 180 дней",
        "type": "number"
      },
      "dnt365beg": {
        "format": "decimal(16,8)",
        "description": "Начальный дисконт для сроков РЕПО от 201 до 365 дней",
        "type": "number"
      },
      "dnt365max": {
        "format": "decimal(16,8)",
        "description": "Максимальный дисконт для сроков РЕПО от 201 до 365 дней",
        "type": "number"
      },
      "dnt365min": {
        "format": "decimal(16,8)",
        "description": "Минимальный дисконт для сроков РЕПО от 201 до 365 дней",
        "type": "number"
      },
      "duration": {
        "format": "int64",
        "description": "Дюрация по Маколею",
        "type": "integer"
      },
      "duration_agg": {
        "format": "int64",
        "description": "Сводная дюрация",
        "type": "integer"
      },
      "duration_n": {
        "format": "decimal(16,8)",
        "description": "Дюрация к погашению модифицированная",
        "type": "number"
      },
      "duration_o": {
        "format": "int64",
        "description": "Дюрация к оферте",
        "type": "integer"
      },
      "duration_on": {
        "format": "decimal(16,8)",
        "description": "Дюрация к оферте модифицированная",
        "type": "number"
      },
      "exch": {
        "description": "Краткое наименование торговой площадки",
        "type": "string"
      },
      "exp_bl_n": {
        "type": "string"
      },
      "exp_e_n": {
        "type": "string"
      },
      "facevalue": {
        "format": "decimal(38,20)",
        "description": "Номинал",
        "type": "number"
      },
      "facevalue_currency": {
        "description": "Валюта номинала",
        "type": "string"
      },
      "fact_frcst_chng": {
        "description": "Абсолютное изменение между фактом и прогнозом",
        "type": "string"
      },
      "fch_b_i": {
        "description": "",
        "type": "string"
      },
      "fch_b_n": {
        "type": "string"
      },
      "fch_e_dlti": {
        "type": "string"
      },
      "fch_e_lti": {
        "type": "string"
      },
      "forecast": {
        "format": "decimal(16,8)",
        "description": "Прогноз",
        "type": "number"
      },
      "frcst_chng": {
        "description": "Абсолютное изменение прогноза",
        "type": "string"
      },
      "high": {
        "format": "decimal(16,8)",
        "description": "Максимальная цена в валюте торгов за текущий торговый день",
        "type": "number"
      },
      "ifx_b_i": {
        "description": "",
        "type": "string"
      },
      "ifx_b_n": {
        "type": "string"
      },
      "ifx_e_i": {
        "type": "string"
      },
      "ifx_e_n": {
        "type": "string"
      },
      "isin": {
        "description": "Код инструмента ISIN",
        "type": "string"
      },
      "issuer": {
        "description": "Эмитент",
        "type": "string"
      },
      "issuesize": {
        "format": "int64",
        "description": "Объем выпуска в штуках",
        "type": "integer"
      },
      "last": {
        "format": "decimal(16,8)",
        "description": "Цена последней сделки в валюте торгов",
        "type": "number"
      },
      "last_time": {
        "format": "date-time",
        "description": "Время последней сделки (= ЧЧ.ММ.СС, если в ходе последних торогов, ДД.ММ.ГГ, если ранее)",
        "type": "string"
      },
      "last_yield": {
        "format": "decimal(16,8)",
        "description": "Доходность к погашению по последней сделке в % годовых",
        "type": "number"
      },
      "last2avge": {
        "format": "decimal(16,8)",
        "description": "Изменение последней цены к средневзвзвешенной на закрытие предыдущего торгового дня в пунктах",
        "type": "number"
      },
      "lastsettlecode": {
        "description": "Код расчетов последней сделки",
        "type": "string"
      },
      "lclose": {
        "format": "decimal(16,8)",
        "description": "Официальная текущая цена закрытия",
        "type": "number"
      },
      "lnkcurrency": {
        "description": "Сопряженная валюта",
        "type": "string"
      },
      "lotsize": {
        "format": "int64",
        "description": "Лот в штуках",
        "type": "integer"
      },
      "low": {
        "format": "decimal(16,8)",
        "description": "Минимальная цена в валюте торгов за текущий торговый день",
        "type": "number"
      },
      "mat_date": {
        "description": "Дата погашения (экспирации) типа String",
        "type": "string"
      },
      "mat_date_dt": {
        "format": "date-time",
        "description": "Дата погашения (экспирации) типа DateTime",
        "type": "string",
        "readOnly": true
      },
      "mcap": {
        "format": "decimal(20,2)",
        "description": "Капитализация (= Рыночная цена * количество бумаг в обращении)",
        "type": "number"
      },
      "mds_b_i": {
        "description": "",
        "type": "string"
      },
      "mds_b_n": {
        "type": "string"
      },
      "mds_e_lti": {
        "type": "string"
      },
      "mds_e_ltn": {
        "type": "string"
      },
      "mprice": {
        "format": "decimal(16,8)",
        "description": "Рыночная цена3 в валюте торгов, рассчитываемая в соответствии с с Приказом ФСФР от 09 ноября 2010 г. № 10-65/пз-н \"Об утверждении Порядка определения рыночной цены ценных бумаг, расчетной цены ценных бумаг, а также предельной границы колебаний рыночной цены ценных бумаг в целях 23 главы Налогового кодекса Российской Федерации\"",
        "type": "number"
      },
      "mprice2": {
        "format": "decimal(16,8)",
        "description": "Рыночная цена2 в валюте торгов, рассчитываемая в соответствии с Порядком расчета рыночной стоимости активов и стоимости чистых активов, в которые инвестированы средства пенсионных накоплений (утв. приказом Федеральной службы по финансовым рынкам от 26 декабря 2006 г. № 06-155/пз-н) и Порядком расчета рыночной стоимости активов и стоимости чистых активов, в которые инвестированы накопления для жилищного обеспечения военнослужащих (утв. приказом Федеральной службы по финансовым рынкам от 15 декабря 2005 г. № 05-82/пз-н)",
        "type": "number"
      },
      "name": {
        "description": "Краткое наименование инструмента на площадке",
        "type": "string"
      },
      "open": {
        "format": "decimal(16,8)",
        "description": "Цена открытия (обычно = цена первой сделки) в валюте торгов",
        "type": "number"
      },
      "open_inst": {
        "format": "int64",
        "description": "Количество открытых позиций",
        "type": "integer"
      },
      "opprice": {
        "format": "decimal(16,8)",
        "description": "Цена периода открытия в валюте торгов",
        "type": "number"
      },
      "period": {
        "description": "Период в текстовом представлении",
        "type": "string"
      },
      "potential": {
        "format": "decimal(38,8)",
        "description": "Относительное изменение Прогнозной к Рыночной цене",
        "type": "number"
      },
      "prevmprice": {
        "format": "decimal(16,8)",
        "description": "Предыдущая рыночная цена цена3 в валюте торгов",
        "type": "number"
      },
      "publication_date": {
        "format": "date-time",
        "description": "Дата публикации факта следующего периода",
        "type": "string"
      },
      "pvbp": {
        "format": "decimal(38,8)",
        "description": "PVBP к погашению",
        "type": "number"
      },
      "pvbp_agg": {
        "format": "decimal(38,8)",
        "description": "PVBP сводная",
        "type": "number"
      },
      "pvbp_o": {
        "format": "decimal(38,8)",
        "description": "PVBP к оферте",
        "type": "number"
      },
      "rec_buy_pct": {
        "format": "decimal(16,2)",
        "description": "Доля рекомендаций \"Покупать\"",
        "type": "number"
      },
      "rec_change": {
        "format": "int32",
        "description": "Изменение рекомендации",
        "type": "integer"
      },
      "rec_hold_pct": {
        "format": "decimal(16,2)",
        "description": "Доля рекомендаций \"Держать\"",
        "type": "number"
      },
      "rec_sell_pct": {
        "format": "decimal(16,2)",
        "description": "Доля рекомендаций \"Продавать\"",
        "type": "number"
      },
      "rec_val": {
        "format": "decimal(8,1)",
        "description": "Оценка рекомендации в масштабе от -1 до 1",
        "type": "number"
      },
      "recommendation": {
        "description": "Рекомендация по бумаге",
        "type": "string"
      },
      "rus_b_n": {
        "type": "string"
      },
      "rus_e_i": {
        "type": "string"
      },
      "rus_e_n": {
        "type": "string"
      },
      "seccode": {
        "description": "Торговый код инструмента на площадке",
        "type": "string"
      },
      "secname": {
        "description": "Полное русское наименование",
        "type": "string"
      },
      "secname_e": {
        "description": "Полное английское наименование",
        "type": "string"
      },
      "sector": {
        "description": "Сектор",
        "type": "string"
      },
      "settlecode": {
        "description": "Код расчетов (определяет временные параметры сделки)",
        "type": "string"
      },
      "shortname_eng": {
        "description": "Краткое английское наименование",
        "type": "string"
      },
      "shortname_rus": {
        "description": "Краткое русское наименование",
        "type": "string"
      },
      "snp_b_i": {
        "description": "",
        "type": "string"
      },
      "snp_b_n": {
        "type": "string"
      },
      "snp_e_lti": {
        "type": "string"
      },
      "snp_e_n": {
        "type": "string"
      },
      "spread": {
        "format": "decimal(16,8)",
        "description": "Спред",
        "type": "number"
      },
      "status": {
        "description": "Торговый статус инструмента (торгуется ли он на площадке в текущий торговый день)",
        "type": "string"
      },
      "target_price": {
        "format": "decimal(18,6)",
        "description": "Прогнозная цена",
        "type": "number"
      },
      "tick_acc": {
        "description": "Количество изменений",
        "type": "string"
      },
      "time": {
        "format": "date-time",
        "description": "Время последнего события по инструменту (сделки или котировки)",
        "type": "string"
      },
      "tp_chng": {
        "format": "decimal(38,8)",
        "description": "Абсолютное изменение Прогнозной цены",
        "type": "number"
      },
      "tp_chng_m": {
        "format": "decimal(38,8)",
        "description": "Абсолютное изменение Прогнозной цены за месяц",
        "type": "number"
      },
      "tp_chng_m_pct": {
        "format": "decimal(38,8)",
        "description": "Относительное изменение Прогнозной цены за месяц",
        "type": "number"
      },
      "tp_chng_pct": {
        "format": "decimal(38,8)",
        "description": "Относительное изменение Прогнозной цены",
        "type": "number"
      },
      "tp_chng_q": {
        "format": "decimal(38,8)",
        "description": "Относительное изменение Прогнозной цены",
        "type": "number"
      },
      "tp_chng_q_pct": {
        "format": "decimal(38,8)",
        "description": "Относительное изменение Прогнозной цены за 3 месяца",
        "type": "number"
      },
      "tp_chng_time": {
        "format": "date-time",
        "description": "Дата последнего ненулевого изменения Прогнозной цены",
        "type": "string"
      },
      "tp_chng_y": {
        "format": "decimal(38,8)",
        "description": "Абсолютное изменение Прогнозной цены за год",
        "type": "number"
      },
      "tp_chng_y_pct": {
        "format": "decimal(38,8)",
        "description": "Относительное изменение Прогнозной цены за год",
        "type": "number"
      },
      "tp_deviation": {
        "format": "decimal(18,6)",
        "description": "Стандартное отклонение по оценкам Прогнозной цены",
        "type": "number"
      },
      "tp_high": {
        "format": "decimal(18,6)",
        "description": "Максимальная из оценок Прогнозной цены",
        "type": "number"
      },
      "tp_low": {
        "format": "decimal(18,6)",
        "description": "Минимальная из оценок Прогнозной цены",
        "type": "number"
      },
      "tp_median": {
        "format": "decimal(18,6)",
        "description": "Медианная оценка прогнозной цены",
        "type": "number"
      },
      "val": {
        "format": "decimal(32,8)",
        "description": "Оборот последней сделки в валюте торгов (= цена последней сделки * объем последней сделки)",
        "type": "number"
      },
      "val_acc": {
        "format": "decimal(26,2)",
        "description": "Дневной оборот в валюте торгов за текущий торговый день",
        "type": "number"
      },
      "val_acc_usd": {
        "format": "decimal(38,8)",
        "description": "Суммарный оборот в долларах США",
        "type": "number"
      },
      "val_usd": {
        "format": "decimal(38,8)",
        "description": "Оборот последней сделки в долларах США",
        "type": "number"
      },
      "vol": {
        "format": "int64",
        "description": "Объём последней сделки в штуках",
        "type": "integer"
      },
      "vol_acc": {
        "format": "int64",
        "description": "Дневной объем в штуках за текущий торговый день",
        "type": "integer"
      },
      "vol_lots": {
        "format": "int64",
        "description": "Объем последней сделки в лотах",
        "type": "integer"
      },
      "y2o_ask": {
        "format": "decimal(16,8)",
        "description": "Доходность к оферте по предложению",
        "type": "number"
      },
      "y2o_bid": {
        "format": "decimal(16,8)",
        "description": "Доходность к оферте по спросу",
        "type": "number"
      },
      "y2o_change": {
        "format": "decimal(16,8)",
        "description": "Изменение доходности к оферте абс.",
        "type": "number"
      },
      "y2o_change_pct": {
        "format": "decimal(16,3)",
        "description": "Изменение доходности к оферте отн.",
        "type": "number"
      },
      "y2o_last": {
        "format": "decimal(16,8)",
        "description": "Доходность к оферте по цене последней сделки",
        "type": "number"
      },
      "y2o_prev": {
        "format": "decimal(16,8)",
        "description": "Доходность к оферте по цене пред.дня",
        "type": "number"
      },
      "y2o_wap": {
        "format": "decimal(16,8)",
        "description": "Доходность к оферте по средневзвешенной цене",
        "type": "number"
      },
      "yield_2": {
        "format": "decimal(16,8)",
        "description": "Доходность к аукциону в % годовых",
        "type": "number"
      },
      "yield_agg": {
        "format": "decimal(16,8)",
        "description": "Сводная доходность",
        "type": "number"
      },
      "yield_ask": {
        "format": "decimal(16,8)",
        "description": "Доходность к погашению по предложению",
        "type": "number"
      },
      "yield_average_12m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность за 12 месяцев",
        "type": "number"
      },
      "yield_average_1m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность за 1 месяц",
        "type": "number"
      },
      "yield_average_2m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность за 2 месяца",
        "type": "number"
      },
      "yield_average_2w": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность за 2 недели",
        "type": "number"
      },
      "yield_average_3m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность за 3 месяца",
        "type": "number"
      },
      "yield_average_6m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность за 6 месяцев",
        "type": "number"
      },
      "yield_average_o12m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность к оферте за 12 месяцев",
        "type": "number"
      },
      "yield_average_o1m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность к оферте за 1 месяц",
        "type": "number"
      },
      "yield_average_o2m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность к оферте за 2 месяца",
        "type": "number"
      },
      "yield_average_o2w": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность к оферте за 2 недели",
        "type": "number"
      },
      "yield_average_o3m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность к оферте за 3 месяца",
        "type": "number"
      },
      "yield_average_o6m": {
        "format": "decimal(16,8)",
        "description": "Средняя доходность к оферте за 6 месяцев",
        "type": "number"
      },
      "yield_bid": {
        "format": "decimal(16,8)",
        "description": "Доходность к погашению по спросу",
        "type": "number"
      },
      "yield_chng": {
        "format": "decimal(16,8)",
        "description": "Изменение доходности последней сделки к доходности по закрытию предыдущих торгов",
        "type": "number"
      },
      "yield_cpprice": {
        "format": "decimal(16,8)",
        "description": "Доходность к погашению по цене закрытия",
        "type": "number"
      },
      "yield_cwa": {
        "format": "decimal(16,8)",
        "description": "Доходность текущая по средневзвешенной",
        "type": "number"
      },
      "yield_high": {
        "format": "decimal(16,8)",
        "description": "Максимальная доходность",
        "type": "number"
      },
      "yield_low": {
        "format": "decimal(16,8)",
        "description": "Минимальная доходность",
        "type": "number"
      },
      "yield_o_cwa": {
        "format": "decimal(16,8)",
        "description": "Доходность к оферте текущая по средневзвешенной",
        "type": "number"
      },
      "yield_o_swa": {
        "format": "decimal(16,8)",
        "description": "Доходность к оферте простая по средневзвешенной",
        "type": "number"
      },
      "yield_open": {
        "format": "decimal(16,8)",
        "description": "Доходность первой сделки",
        "type": "number"
      },
      "yield_prev": {
        "format": "decimal(16,8)",
        "description": "Доходность к погашению по цене пред. дня",
        "type": "number"
      },
      "yield_swa": {
        "format": "decimal(16,8)",
        "description": "Доходность простая по средневзвешенной",
        "type": "number"
      },
      "total_return": {
        "format": "decimal(20,8)",
        "description": "Накопленная стоимость",
        "type": "number"
      },
      "full_price_pct": {
        "format": "decimal(20,8)",
        "description": "Полная цена, %",
        "type": "number"
      },
      "zspread": {
        "format": "decimal(20,8)",
        "description": "Z-спрэд",
        "type": "number"
      },
      "currency": {
        "description": "Валюта торгов",
        "type": "string"
      }
    }
  },
  "Requests.V2.Bond.AmortizationsRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный). Для получения данных по конкретному выпуску необходимо использовать фильтр по id_fintool.",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Bond.AmortizationsFields": {
    "type": "object",
    "properties": {
      "id_fintool": {
        "format": "int64",
        "description": "Идентификатор облигации",
        "type": "integer"
      },
      "id_tranche": {
        "format": "int64",
        "description": "Номер погашения",
        "type": "integer"
      },
      "mty_date": {
        "format": "date-time",
        "description": "Дата погашения части номинала",
        "type": "string"
      },
      "days_from_dist": {
        "format": "int64",
        "description": "Количество дней от даты начала размещения до даты погашения части номинала",
        "type": "integer"
      },
      "mty_part": {
        "format": "double",
        "description": "Процент погашения",
        "type": "number"
      },
      "pay_per_bond": {
        "format": "double",
        "description": "Выплата на одну облигацию",
        "type": "number"
      },
      "pay_per_market": {
        "format": "double",
        "description": "Выплаты на все облигации в обращении",
        "type": "number"
      },
      "mty_type": {
        "description": "Тип досрочного погашения",
        "type": "string"
      },
      "rate_date": {
        "format": "date-time",
        "description": "Дата объявления погашения",
        "type": "string"
      },
      "fix_date": {
        "format": "date-time",
        "description": "Дата фиксации списка",
        "type": "string"
      },
      "pay_date": {
        "format": "date-time",
        "description": "Реальная дата погашения/выплаты",
        "type": "string"
      },
      "update_date": {
        "format": "date-time",
        "description": "Дата/время последнего изменения записи",
        "type": "string"
      }
    }
  },
  "Requests.V2.Bond.CouponsRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный). Для получения купонов конкретного выпуска необходимо использовать фильтр по id_fintool",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Bond.CouponsFields": {
    "type": "object",
    "properties": {
      "id_fintool": {
        "format": "int64",
        "description": "Идентификатор облигации",
        "type": "integer"
      },
      "id_coupon": {
        "format": "int64",
        "description": "Номер купонной выплаты",
        "type": "integer"
      },
      "begin_period": {
        "format": "date-time",
        "description": "Дата начала купона",
        "type": "string"
      },
      "end_period": {
        "format": "date-time",
        "description": "Дата окончания купона",
        "type": "string"
      },
      "coupon_period": {
        "format": "int64",
        "description": "Количество дней в купонном периоде",
        "type": "integer"
      },
      "days_from_dist": {
        "format": "int64",
        "description": "Количество дней от даты начала размещения до даты окончания купонного периода",
        "type": "integer"
      },
      "coupon_rate": {
        "format": "double",
        "description": "Ставка купона, процентов годовых",
        "type": "number"
      },
      "pay_per_bond": {
        "format": "double",
        "description": "Выплата на одну облигацию",
        "type": "number"
      },
      "coupon_val": {
        "format": "double",
        "description": "Выплаты на все облигации в обращении",
        "type": "number"
      },
      "stop_trade_date": {
        "format": "date-time",
        "description": "Дата приостановки торгов в целях формирования списка владельцев облигаций для осуществления купонной выплаты",
        "type": "string"
      },
      "pay_date": {
        "format": "date-time",
        "description": "Дата реальной выплаты купона",
        "type": "string"
      },
      "coupon_rate_date": {
        "format": "date-time",
        "description": "Дата, не позже которой должна быть определена купонная ставка для будущих дат/дата определения купонной ставки для прошедших дат",
        "type": "string"
      },
      "fix_date": {
        "format": "date-time",
        "description": "Дата фиксации списка",
        "type": "string"
      },
      "update_date": {
        "format": "date-time",
        "description": "Дата/время последнего изменения записи",
        "type": "string"
      },
      "pay_per_bond_frac": {
        "format": "double",
        "description": "Выплата на одну облигацию (без округл.)",
        "type": "number"
      },
      "base_type_id": {
        "format": "int32",
        "description": "ID типа базового индикатора",
        "type": "integer"
      },
      "base_type_name": {
        "description": "Название типа базового индикатора",
        "type": "string"
      },
      "base_fintoolid": {
        "format": "int64",
        "description": "ID базового инструмента в ФинМаркет",
        "type": "integer"
      },
      "rate_spread_pct": {
        "format": "double",
        "description": "Отличие ставки купона от ставки базового индикатора, в %",
        "type": "number"
      },
      "period_from": {
        "format": "date-time",
        "description": "Дата начала действия ставки/правила",
        "type": "string"
      },
      "period_to": {
        "format": "date-time",
        "description": "Дата окончания действия ставки/правила",
        "type": "string"
      }
    }
  },
  "Bond.CovenantsInfoFields": {
    "type": "object",
    "properties": {
      "covenant_type_id": {
        "format": "int32",
        "description": "Тип ковенанты",
        "type": "integer"
      },
      "covenant_type_name": {
        "description": "Название ковенанты",
        "type": "string"
      }
    }
  },
  "Requests.V2.Bond.OffersRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный). Для получения данных по конкретному выпуску необходимо использовать фильтр по id_fintool.",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Bond.OffersFields": {
    "type": "object",
    "properties": {
      "id_fintool": {
        "format": "int64",
        "description": "Идентификатор облигации",
        "type": "integer"
      },
      "id_offer": {
        "format": "int64",
        "description": "Номер досрочного выкупа (оферты)",
        "type": "integer"
      },
      "beg_order": {
        "format": "date-time",
        "description": "Дата начала периода предъявления облигаций к выкупу",
        "type": "string"
      },
      "end_order": {
        "format": "date-time",
        "description": "Дата окончания периода предъявления облигаций к выкупу",
        "type": "string"
      },
      "offer_date": {
        "format": "date-time",
        "description": "Расчетная дата выкупа",
        "type": "string"
      },
      "end_offer_date": {
        "format": "date-time",
        "description": "Дата реального выкупа",
        "type": "string"
      },
      "days_from_dist": {
        "format": "int64",
        "description": "Количество дней от размещения до расчетной даты выкупа",
        "type": "integer"
      },
      "rate_date": {
        "format": "date-time",
        "description": "Дата объявления досрочного выкупа/оферты",
        "type": "string"
      },
      "operation_type": {
        "description": "Тип выкупа",
        "type": "string"
      },
      "buy_back_price": {
        "format": "double",
        "description": "Цена выкупа, в процентах от номинала, грязная",
        "type": "number"
      },
      "buy_back_vol": {
        "format": "double",
        "description": "Объем выкупленных облигаций, штук",
        "type": "number"
      },
      "update_date": {
        "format": "date-time",
        "description": "Дата/время последнего изменения записи",
        "type": "string"
      },
      "buy_back_limit_vol": {
        "format": "int64",
        "description": "Предельный объем выкупаемых облигаций, штук",
        "type": "integer"
      },
      "buy_back_bid_vol": {
        "format": "int64",
        "description": "Общий объем предъявленных к выкупу облигаций, штук",
        "type": "integer"
      },
      "buy_back_bid_ratio": {
        "format": "double",
        "description": "Коэффициент удовлетворения заявок на выкуп облигаций",
        "type": "number"
      }
    }
  },
  "Requests.V2.Bond.AmortizationsExtRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный). Для получения данных по конкретному выпуску необходимо использовать фильтр по id_fintool.",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Bond.AmortizationsExtFields": {
    "type": "object",
    "properties": {
      "id_fintool": {
        "format": "int64",
        "description": "Идентификатор облигации",
        "type": "integer"
      },
      "id_tranche": {
        "format": "int64",
        "description": "Номер погашения",
        "type": "integer"
      },
      "mty_date": {
        "format": "date-time",
        "description": "Дата погашения части номинала",
        "type": "string"
      },
      "days_from_dist": {
        "format": "int64",
        "description": "Количество дней от даты начала размещения до даты погашения части номинала",
        "type": "integer"
      },
      "mty_part": {
        "format": "double",
        "description": "Процент погашения",
        "type": "number"
      },
      "pay_per_bond": {
        "format": "double",
        "description": "Выплата на одну облигацию",
        "type": "number"
      },
      "pay_per_market": {
        "format": "double",
        "description": "Выплаты на все облигации в обращении",
        "type": "number"
      },
      "mty_type": {
        "description": "Тип досрочного погашения",
        "type": "string"
      },
      "rate_date": {
        "format": "date-time",
        "description": "Дата объявления погашения",
        "type": "string"
      },
      "fix_date": {
        "format": "date-time",
        "description": "Дата фиксации списка",
        "type": "string"
      },
      "pay_date": {
        "format": "date-time",
        "description": "Реальная дата погашения/выплаты",
        "type": "string"
      },
      "pay_per_bond_matching": {
        "format": "int32",
        "description": "Дата/время последнего изменения записи",
        "type": "integer"
      },
      "pay_date_matching": {
        "format": "int32",
        "description": "Соответствие реальной даты погашения/выплаты",
        "type": "integer"
      },
      "mty_part_matching": {
        "format": "int32",
        "description": "Соответствие процента погашения",
        "type": "integer"
      },
      "mty_date_matching": {
        "format": "int32",
        "description": "Соответствие даты погашения части номинала",
        "type": "integer"
      },
      "fix_date_matching": {
        "format": "int32",
        "description": "Соответствие даты фиксации списка",
        "type": "integer"
      },
      "update_date": {
        "format": "date-time",
        "description": "Дата/время последнего изменения записи",
        "type": "string"
      }
    }
  },
  "Requests.V2.Bond.AuctionDataRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный). Для получения данных по конкретному выпуску необходимо использовать фильтр по id_fintool.",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Bond.AuctionDataFields": {
    "type": "object",
    "properties": {
      "id_fintool": {
        "format": "int64",
        "description": "Идентификатор облигации",
        "type": "integer"
      },
      "begdist_date": {
        "format": "date-time",
        "description": "Дата начала размещения",
        "type": "string"
      },
      "enddist_date": {
        "format": "date-time",
        "description": "Дата окончания размещения",
        "type": "string"
      },
      "method": {
        "description": "Способ размещения",
        "type": "string"
      },
      "exch_name": {
        "description": "Название площадки, на которой происходит размещение",
        "type": "string"
      },
      "ask_vol": {
        "format": "double",
        "description": "Объем облигаций, предложенных к размещению, штук",
        "type": "number"
      },
      "ask_val": {
        "format": "double",
        "description": "Объем облигаций, предложенных к размещению, в валюте номинала",
        "type": "number"
      },
      "bid_vol": {
        "format": "double",
        "description": "Объем спроса на выпуск, штук",
        "type": "number"
      },
      "bid_val": {
        "format": "double",
        "description": "Объем спроса, в валюте номинала",
        "type": "number"
      },
      "min_bid": {
        "format": "double",
        "description": "Минимальная цена в заявках на приобретение облигаций",
        "type": "number"
      },
      "max_bid": {
        "format": "double",
        "description": "Максимальная цена в заявках на приобретение облигаций",
        "type": "number"
      },
      "dist_vol": {
        "format": "double",
        "description": "Размещенный объем, штук",
        "type": "number"
      },
      "dist_val": {
        "format": "double",
        "description": "Размещенный объем, в валюте номинала",
        "type": "number"
      },
      "waprice": {
        "format": "double",
        "description": "Средневзвешенная цена по итогам размещения",
        "type": "number"
      },
      "yield_waprice": {
        "format": "double",
        "description": "Доходность по средневзвешенной цене",
        "type": "number"
      },
      "num_trades": {
        "format": "int64",
        "description": "Количество сделок",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Bond.CalculateRequest": {
    "required": [
      "id",
      "date",
      "value"
    ],
    "type": "object",
    "properties": {
      "isCloseRegister": {
        "type": "boolean"
      },
      "isPercent": {
        "type": "boolean"
      },
      "id": {
        "format": "int64",
        "description": "issId облигации",
        "type": "integer"
      },
      "date": {
        "format": "date-time",
        "description": "Дата расчета",
        "type": "string"
      },
      "value": {
        "format": "double",
        "description": "Цена (в % от номинала) или доходность (в % годовых)",
        "type": "number"
      },
      "valueType": {
        "format": "int32",
        "description": "Тип значения value: 0 – чистая цена; 1 – полная цена; 2 – доходность к погашению; 3 – доходность к оферте.",
        "enum": [
          0,
          1,
          2,
          3,
          10,
          11
        ],
        "type": "integer"
      },
      "rateNew": {
        "format": "double",
        "description": "Значение ставки для неизвестных купонов. Если не задано, то используется ставка последнего известного купона.",
        "type": "number"
      },
      "fields": {
        "description": "Список требуемых полей",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "periods": {
        "format": "int32",
        "description": "Определяет периоды расчёта, т.е. набор возвращаемых данных: \r\n0 - до погашения и ближайшей оферты\r\n1-\tсводные значения\r\n2 – до погашения\r\n3 – до погашения и всех оставшихся оферт",
        "enum": [
          0,
          1,
          2,
          3
        ],
        "type": "integer"
      },
      "commission": {
        "format": "double",
        "description": "Optional commission",
        "type": "number"
      },
      "members": {
        "description": "Строковой массив, возвращаемых в ответе, объектов:\r\n\"CalculateBond\",\"FaceValue\". Если не указан, то все.",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    }
  },
  "Bond.CalculateResponse": {
    "type": "object",
    "properties": {
      "calculateBond": {
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Bond.CalculateBondFields"
        }
      },
      "residualFaceValue": {
        "$ref": "Info.ResidualFaceValueResponse"
      }
    }
  },
  "Bond.CalculateBondFields": {
    "type": "object",
    "properties": {
      "is_offer": {
        "description": "Тип расчета: 1 – расчет к оферте; 0 – расчет к погашению.",
        "type": "boolean"
      },
      "offer_id": {
        "format": "int32",
        "description": "Номер оферты для которой производится расчет",
        "type": "integer"
      },
      "price_pct": {
        "format": "double",
        "description": "Чистая цена в % от номинала",
        "type": "number"
      },
      "accrint_pct": {
        "format": "double",
        "description": "НКД в % от номинала",
        "type": "number"
      },
      "fullprice_pct": {
        "format": "double",
        "description": "Полная цена в % от номинала",
        "type": "number"
      },
      "facevalcur": {
        "description": "Валюта номинала",
        "type": "string"
      },
      "price": {
        "format": "double",
        "description": "Чистая цена в валюте номинала",
        "type": "number"
      },
      "accrint": {
        "format": "double",
        "description": "НКД в валюте номинала",
        "type": "number"
      },
      "fullprice": {
        "format": "double",
        "description": "Полная цена в валюте номинала",
        "type": "number"
      },
      "cfaceval": {
        "format": "double",
        "description": "Номинал",
        "type": "number"
      },
      "date": {
        "format": "date-time",
        "description": "Дата соответствующей оферты/погашения",
        "type": "string"
      },
      "yield": {
        "format": "double",
        "description": "Доходность по последней сделке, %",
        "type": "number"
      },
      "dur": {
        "format": "int32",
        "description": "Дюрация по Маколею, дней",
        "type": "integer"
      },
      "durmd": {
        "format": "double",
        "description": "Дюрация модифицированная, %",
        "type": "number"
      },
      "convx": {
        "format": "double",
        "description": "Выпуклость",
        "type": "number"
      },
      "pvbp": {
        "format": "double",
        "description": "PVBP",
        "type": "number"
      },
      "cyield": {
        "format": "double",
        "description": "Доходность текущая по последней цене, %",
        "type": "number"
      },
      "syield": {
        "format": "double",
        "description": "Доходность простая по последней цене, %",
        "type": "number"
      },
      "accrint_at_date": {
        "format": "double",
        "description": "НКД на дату Bond.CalculateBondFields.date",
        "type": "number"
      },
      "faceval_at_date": {
        "format": "double",
        "description": "Остаточный номинал на дату Bond.CalculateBondFields.date",
        "type": "number"
      }
    }
  },
  "Info.ResidualFaceValueResponse": {
    "type": "object",
    "properties": {
      "faceValue": {
        "format": "double",
        "type": "number"
      },
      "error": {
        "type": "string"
      }
    }
  },
  "Requests.V2.Bond.CalculateBondRequest": {
    "required": [
      "id",
      "date",
      "value"
    ],
    "type": "object",
    "properties": {
      "id": {
        "description": "Идентификатор облигации (ISIN, RegCode, NRDCode, FintoolID, TradeCode)",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата расчета",
        "type": "string"
      },
      "value": {
        "format": "double",
        "description": "Цена (в % от номинала) или доходность (в % годовых)",
        "type": "number"
      },
      "valueType": {
        "format": "int32",
        "description": "Тип значения value: 0 – чистая цена; 1 – полная цена; 2 – доходность к погашению; 3 – доходность к оферте;\r\n10 - чистая цена в валюте номинала;  11 - полная цена в валюте номинала",
        "enum": [
          0,
          1,
          2,
          3,
          10,
          11
        ],
        "type": "integer"
      },
      "rateNew": {
        "format": "double",
        "description": "Значение ставки для неизвестных купонов. Если не задано, то используется ставка последнего известного купона.",
        "type": "number"
      },
      "fields": {
        "description": "Список требуемых полей",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "periods": {
        "format": "int32",
        "description": "Определяет периоды расчёта, т.е. набор возвращаемых данных: \r\n0 - до погашения и ближайшей оферты\r\n1-\tсводные значения\r\n2 – до погашения\r\n3 – до погашения и всех оставшихся оферт",
        "enum": [
          0,
          1,
          2,
          3
        ],
        "type": "integer"
      },
      "commission": {
        "format": "double",
        "description": "Optional commission",
        "type": "number"
      }
    }
  },
  "Requests.V2.Bond.CalculateBondExRequest": {
    "required": [
      "id",
      "date",
      "value"
    ],
    "type": "object",
    "properties": {
      "id": {
        "description": "Идентификатор облигации (ISIN, RegCode, NRDCode, FintoolID, TradeCode)",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата расчета",
        "type": "string"
      },
      "value": {
        "format": "double",
        "description": "Цена (в % от номинала) или доходность (в % годовых)",
        "type": "number"
      },
      "valueType": {
        "format": "int32",
        "description": "Тип значения value: 0 – чистая цена; 1 – полная цена; 2 – доходность к погашению; 3 – доходность к оферте;\r\n10 - чистая цена в валюте номинала;  11 - полная цена в валюте номинала",
        "enum": [
          0,
          1,
          2,
          3,
          10,
          11
        ],
        "type": "integer"
      },
      "fields": {
        "description": "Список требуемых полей",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "periods": {
        "format": "int32",
        "description": "Определяет периоды расчёта, т.е. набор возвращаемых данных: \r\n0 - до погашения и ближайшей оферты\r\n1-\tсводные значения\r\n2 – до погашения\r\n3 – до погашения и всех оставшихся оферт",
        "enum": [
          0,
          1,
          2,
          3
        ],
        "type": "integer"
      },
      "couponForecast": {
        "description": "Пользовательские значения доходности для неизвестных купонов. Разделитель «;».",
        "type": "string"
      },
      "couponBinding": {
        "description": "Даты пользовательских купонов, заданных в параметре couponForecast. Разделитель «;».",
        "type": "string"
      },
      "usePayDate": {
        "description": "Use PayDate as event date instead of the end of period",
        "type": "boolean"
      },
      "isCloseRegister": {
        "description": "Use date of registry closing",
        "type": "boolean"
      },
      "taxModel": {
        "format": "int32",
        "description": "Use specific taxation model",
        "type": "integer"
      },
      "commission": {
        "format": "double",
        "description": "Optional commission",
        "type": "number"
      }
    }
  },
  "Requests.V2.Bond.CalculateBondMultiRequest": {
    "required": [
      "date",
      "items"
    ],
    "type": "object",
    "properties": {
      "date": {
        "format": "date-time",
        "description": "Дата расчёта",
        "type": "string"
      },
      "items": {
        "description": "Список инструментов с параметрами",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Requests.V2.Bond.CalculateBondMultiRequestItem"
        }
      },
      "fields": {
        "description": "Список требуемых полей",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "periods": {
        "format": "int32",
        "description": "Определяет периоды расчёта, т.е. набор возвращаемых данных: \r\n0 - до погашения и ближайшей оферты\r\n1-\tсводные значения\r\n2 – до погашения\r\n3 – до погашения и всех оставшихся оферт",
        "enum": [
          0,
          1,
          2,
          3
        ],
        "type": "integer"
      }
    }
  },
  "Requests.V2.Bond.CalculateBondMultiRequestItem": {
    "type": "object",
    "properties": {
      "id": {
        "description": "Идентификатор/код инструмента",
        "type": "string"
      },
      "value": {
        "format": "double",
        "description": "Цена или доходность инструмента",
        "type": "number"
      },
      "valueType": {
        "format": "int32",
        "description": "Тип значения value: 0 – чистая цена; 1 – полная цена; 2 – доходность к погашению; 3 – доходность к оферте;\r\n10 - чистая цена в валюте номинала;  11 - полная цена в валюте номинала",
        "enum": [
          0,
          1,
          2,
          3,
          10,
          11
        ],
        "type": "integer"
      },
      "couponForecasts": {
        "description": "Пользовательские значения для неизвестных купонов",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Requests.V2.Bond.CalculateBondMultiForecast"
        }
      },
      "usePayDate": {
        "description": "Признак необходимости использовать дату фактического платежа вместо даты окончания купона. Опционально.",
        "type": "boolean"
      },
      "isCloseRegister": {
        "description": "Расчёт НКД вести не на дату окончания купона, а на дату фиксации реестра получателей. Опционально.",
        "type": "boolean"
      },
      "taxModel": {
        "format": "int32",
        "description": "Номер модели налогообложения. Опционально.",
        "type": "integer"
      },
      "commission": {
        "format": "double",
        "description": "Размер комиссии, а если не задан, то считаем равным 0. Опционально.",
        "type": "number"
      }
    }
  },
  "Requests.V2.Bond.CalculateBondMultiForecast": {
    "type": "object",
    "properties": {
      "couponRate": {
        "format": "double",
        "description": "Ставка купона",
        "type": "number"
      },
      "couponDate": {
        "format": "date-time",
        "description": "Дата купона",
        "type": "string"
      }
    }
  },
  "Bond.CalculateBondMultiResponse": {
    "type": "object",
    "properties": {
      "id": {
        "description": "Идентификатор инструмента",
        "type": "string"
      },
      "dataList": {
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Bond.CalculateBondFields"
        }
      }
    }
  },
  "Requests.V2.Bond.ClassificationRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный). Для получения набора признаков конкретного выпуска необходимо использовать фильтр по id_fintool.",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Bond.ClassificationFields": {
    "type": "object",
    "properties": {
      "id_fintool": {
        "format": "int64",
        "description": "Идентификатор облигации",
        "type": "integer"
      },
      "id_type_fintool": {
        "format": "int64",
        "description": "Идентификатор типа облигации. См. метод ListBondTypes для получения списка идентификаторов.",
        "type": "integer"
      },
      "id_type_group": {
        "format": "int64",
        "description": "Идентификатор категории типа. См. метод ListTypeGroups для получения списка идентификаторов.",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Bond.CommonDataRequest": {
    "type": "object",
    "properties": {
      "types": {
        "description": "Список идентификаторов типа облигаций. См. метод ListBondTypes для получения списка идентификаторов.",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "format": "int32",
          "type": "integer"
        }
      },
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Bond.CommonDataFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int64",
        "description": "Идентификатор облигации",
        "type": "integer"
      },
      "shortname_rus": {
        "description": "Краткое наименование выпуска",
        "type": "string"
      },
      "fullname_rus": {
        "description": "Полное наименование выпуска",
        "type": "string"
      },
      "fininstid": {
        "format": "int64",
        "description": "Идентификатор эмитента выпуска в базе Интерфакс",
        "type": "integer"
      },
      "fininstid_operator": {
        "format": "int64",
        "description": "Идентификатор оператора выпуска в базе Интерфакс",
        "type": "integer"
      },
      "okpo": {
        "description": "ОКПО эмитента выпуска",
        "type": "string"
      },
      "okpo_operator": {
        "description": "ОКПО оператора выпуска",
        "type": "string"
      },
      "name_operator": {
        "description": "Наименование оператора выпуска",
        "type": "string"
      },
      "status": {
        "description": "Статус выпуска",
        "type": "string"
      },
      "country": {
        "description": "Двухбуквенный код страны в соответствии с ОКСМ",
        "type": "string"
      },
      "reg_code": {
        "description": "Регистрационный номер выпуска",
        "type": "string"
      },
      "reg_date": {
        "format": "date-time",
        "description": "Дата регистрации",
        "type": "string"
      },
      "reg_org": {
        "description": "Регистратор (ФСФР, ЦБ, МосБиржа и т.п.)",
        "type": "string"
      },
      "isin": {
        "description": "Код ISIN",
        "type": "string"
      },
      "isin2": {
        "description": "Дополнительный ISIN (при регистрации выпуска в нескольких организациях)",
        "type": "string"
      },
      "facevalue": {
        "format": "double",
        "description": "Номинал",
        "type": "number"
      },
      "facevalue_currency": {
        "description": "Валюта номинала",
        "type": "string"
      },
      "issue_vol": {
        "format": "double",
        "description": "Объем выпуска (в штуках)",
        "type": "number"
      },
      "issue_val": {
        "format": "double",
        "description": "Размер выпуска (в деньгах)",
        "type": "number"
      },
      "begdist_date": {
        "format": "date-time",
        "description": "Дата начала размещения",
        "type": "string"
      },
      "enddist_date": {
        "format": "date-time",
        "description": "Дата окончания размещения",
        "type": "string"
      },
      "regdist_date": {
        "format": "date-time",
        "description": "Дата регистрации отчета о выпуске облигаций / дата отсылки уведомления",
        "type": "string"
      },
      "begmty_date": {
        "format": "date-time",
        "description": "Дата начала погашения. Не NULL только в случае наличия амортизационного погашения.",
        "type": "string"
      },
      "endmty_date": {
        "format": "date-time",
        "description": "Дата погашения выпуска",
        "type": "string"
      },
      "market_vol": {
        "format": "double",
        "description": "Объем в обращении (в штуках)",
        "type": "number"
      },
      "market_val": {
        "format": "double",
        "description": "Объем в обращении (в деньгах)",
        "type": "number"
      },
      "num_days": {
        "format": "int64",
        "description": "Количество дней с даты начала размещения до даты окончания погашения облигации",
        "type": "integer"
      },
      "num_coupons": {
        "format": "int64",
        "description": "Количество купонов",
        "type": "integer"
      },
      "coupons_per_year": {
        "format": "int64",
        "description": "Количество купонов в год",
        "type": "integer"
      },
      "amortised_mty": {
        "format": "int32",
        "description": "Признак наличия амортизационного погашения по выпуску (0/1)",
        "type": "integer"
      },
      "have_offer": {
        "format": "int32",
        "description": "Признак наличия по выпуску возможности досрочного выкупа или погашения (0/1)",
        "type": "integer"
      },
      "guaranteed": {
        "format": "int32",
        "description": "Признак наличия по выпуску гарантии (0/1)",
        "type": "integer"
      },
      "guaranteed_val": {
        "format": "double",
        "description": "Гарантированная сумма",
        "type": "number"
      },
      "convertible": {
        "format": "int32",
        "description": "Наличие возможности конвертации / осуществленная конвертация в другой инструмент (0/1)",
        "type": "integer"
      },
      "have_default": {
        "format": "int32",
        "description": "Признак наличия дефолта по выпуску (0/1)",
        "type": "integer"
      },
      "private_dist": {
        "format": "int32",
        "description": "Признак размещения по закрытой подписке (0/1)",
        "type": "integer"
      },
      "id_bond_program": {
        "format": "int64",
        "description": "Идентификатор программы выпуска облигаций. Cм. метод Programs.",
        "type": "integer"
      },
      "basis_name": {
        "description": "Базис расчета",
        "type": "string"
      },
      "accrued_interest_calc_type": {
        "format": "int32",
        "description": "Вариант расчета НКД: 0 - через размер купона в денежных единицах; 1 – через ставку купона и номинал.",
        "type": "integer"
      },
      "update_date": {
        "format": "date-time",
        "description": "Дата/время последнего изменения записи",
        "type": "string"
      },
      "isregion": {
        "format": "double",
        "description": "Выпуск субъекта федерации: 0 – муниципальный выпуск; 1 – выпуск субъекта федерации; пусто – другое.",
        "type": "number"
      },
      "nsd_service": {
        "description": "Обслуживание в НРД. («На обслуживании» и т.п.). Список возможных значений возвращает метод /Info/EnumValues.",
        "type": "string"
      },
      "raterevisionsperyear": {
        "format": "int64",
        "description": "Частота пересмотра плавающей ставки купона (кол-во раз в год).",
        "type": "integer"
      },
      "floatratename": {
        "description": "Определение плавающей процентной ставки по купону.",
        "type": "string"
      },
      "has_covenants": {
        "description": "Флаг наличия ковенанты",
        "type": "boolean"
      }
    }
  },
  "Requests.V2.Bond.CommonDataExtRequest": {
    "type": "object",
    "properties": {
      "types": {
        "description": "Список идентификаторов типа облигаций. См. метод ListBondTypes для получения списка идентификаторов.",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "format": "int32",
          "type": "integer"
        }
      },
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Bond.CommonDataExtFields": {
    "type": "object",
    "properties": {
      "reg_date_matching": {
        "format": "int32",
        "description": "Соответствие даты регистрации",
        "type": "integer"
      },
      "reg_code_matching": {
        "format": "int32",
        "description": "Соответствие регистрационных номеров выпуска",
        "type": "integer"
      },
      "regdist_date_matching": {
        "format": "int32",
        "description": "Соответствие даты регистрации отчета о выпуске облигаций / даты отсылки уведомления",
        "type": "integer"
      },
      "num_days_matching": {
        "format": "int32",
        "description": "Соответствие количества дней с даты начала размещения до даты окончания погашения облигации",
        "type": "integer"
      },
      "num_coupons_matching": {
        "format": "int32",
        "description": "Соответствие количества купонов",
        "type": "integer"
      },
      "market_vol_matching": {
        "format": "int32",
        "description": "Соответствие объема в обращении (в штуках)",
        "type": "integer"
      },
      "issue_vol_matching": {
        "format": "int32",
        "description": "Соответствие объема выпуска (в штуках)",
        "type": "integer"
      },
      "facevalue_currency_matching": {
        "format": "int32",
        "description": "Соответствие валюты номинала",
        "type": "integer"
      },
      "facevalue_matching": {
        "format": "int32",
        "description": "Соответствие номинала",
        "type": "integer"
      },
      "endmty_date_matching": {
        "format": "int32",
        "description": "Соответствие даты погашения выпуска",
        "type": "integer"
      },
      "enddist_date_matching": {
        "format": "int32",
        "description": "Соответствие даты окончания размещения",
        "type": "integer"
      },
      "begdist_date_matching": {
        "format": "int32",
        "description": "Соответствие даты начала размещения",
        "type": "integer"
      },
      "id": {
        "format": "int64",
        "description": "Идентификатор облигации",
        "type": "integer"
      },
      "shortname_rus": {
        "description": "Краткое наименование выпуска",
        "type": "string"
      },
      "fullname_rus": {
        "description": "Полное наименование выпуска",
        "type": "string"
      },
      "fininstid": {
        "format": "int64",
        "description": "Идентификатор эмитента выпуска в базе Интерфакс",
        "type": "integer"
      },
      "fininstid_operator": {
        "format": "int64",
        "description": "Идентификатор оператора выпуска в базе Интерфакс",
        "type": "integer"
      },
      "okpo": {
        "description": "ОКПО эмитента выпуска",
        "type": "string"
      },
      "okpo_operator": {
        "description": "ОКПО оператора выпуска",
        "type": "string"
      },
      "name_operator": {
        "description": "Наименование оператора выпуска",
        "type": "string"
      },
      "status": {
        "description": "Статус выпуска",
        "type": "string"
      },
      "country": {
        "description": "Двухбуквенный код страны в соответствии с ОКСМ",
        "type": "string"
      },
      "reg_code": {
        "description": "Регистрационный номер выпуска",
        "type": "string"
      },
      "reg_date": {
        "format": "date-time",
        "description": "Дата регистрации",
        "type": "string"
      },
      "reg_org": {
        "description": "Регистратор (ФСФР, ЦБ, МосБиржа и т.п.)",
        "type": "string"
      },
      "isin": {
        "description": "Код ISIN",
        "type": "string"
      },
      "isin2": {
        "description": "Дополнительный ISIN (при регистрации выпуска в нескольких организациях)",
        "type": "string"
      },
      "facevalue": {
        "format": "double",
        "description": "Номинал",
        "type": "number"
      },
      "facevalue_currency": {
        "description": "Валюта номинала",
        "type": "string"
      },
      "issue_vol": {
        "format": "double",
        "description": "Объем выпуска (в штуках)",
        "type": "number"
      },
      "issue_val": {
        "format": "double",
        "description": "Размер выпуска (в деньгах)",
        "type": "number"
      },
      "begdist_date": {
        "format": "date-time",
        "description": "Дата начала размещения",
        "type": "string"
      },
      "enddist_date": {
        "format": "date-time",
        "description": "Дата окончания размещения",
        "type": "string"
      },
      "regdist_date": {
        "format": "date-time",
        "description": "Дата регистрации отчета о выпуске облигаций / дата отсылки уведомления",
        "type": "string"
      },
      "begmty_date": {
        "format": "date-time",
        "description": "Дата начала погашения. Не NULL только в случае наличия амортизационного погашения.",
        "type": "string"
      },
      "endmty_date": {
        "format": "date-time",
        "description": "Дата погашения выпуска",
        "type": "string"
      },
      "market_vol": {
        "format": "double",
        "description": "Объем в обращении (в штуках)",
        "type": "number"
      },
      "market_val": {
        "format": "double",
        "description": "Объем в обращении (в деньгах)",
        "type": "number"
      },
      "num_days": {
        "format": "int64",
        "description": "Количество дней с даты начала размещения до даты окончания погашения облигации",
        "type": "integer"
      },
      "num_coupons": {
        "format": "int64",
        "description": "Количество купонов",
        "type": "integer"
      },
      "coupons_per_year": {
        "format": "int64",
        "description": "Количество купонов в год",
        "type": "integer"
      },
      "amortised_mty": {
        "format": "int32",
        "description": "Признак наличия амортизационного погашения по выпуску (0/1)",
        "type": "integer"
      },
      "have_offer": {
        "format": "int32",
        "description": "Признак наличия по выпуску возможности досрочного выкупа или погашения (0/1)",
        "type": "integer"
      },
      "guaranteed": {
        "format": "int32",
        "description": "Признак наличия по выпуску гарантии (0/1)",
        "type": "integer"
      },
      "guaranteed_val": {
        "format": "double",
        "description": "Гарантированная сумма",
        "type": "number"
      },
      "convertible": {
        "format": "int32",
        "description": "Наличие возможности конвертации / осуществленная конвертация в другой инструмент (0/1)",
        "type": "integer"
      },
      "have_default": {
        "format": "int32",
        "description": "Признак наличия дефолта по выпуску (0/1)",
        "type": "integer"
      },
      "private_dist": {
        "format": "int32",
        "description": "Признак размещения по закрытой подписке (0/1)",
        "type": "integer"
      },
      "id_bond_program": {
        "format": "int64",
        "description": "Идентификатор программы выпуска облигаций. Cм. метод Programs.",
        "type": "integer"
      },
      "basis_name": {
        "description": "Базис расчета",
        "type": "string"
      },
      "accrued_interest_calc_type": {
        "format": "int32",
        "description": "Вариант расчета НКД: 0 - через размер купона в денежных единицах; 1 – через ставку купона и номинал.",
        "type": "integer"
      },
      "update_date": {
        "format": "date-time",
        "description": "Дата/время последнего изменения записи",
        "type": "string"
      },
      "isregion": {
        "format": "double",
        "description": "Выпуск субъекта федерации: 0 – муниципальный выпуск; 1 – выпуск субъекта федерации; пусто – другое.",
        "type": "number"
      },
      "nsd_service": {
        "description": "Обслуживание в НРД. («На обслуживании» и т.п.). Список возможных значений возвращает метод /Info/EnumValues.",
        "type": "string"
      },
      "raterevisionsperyear": {
        "format": "int64",
        "description": "Частота пересмотра плавающей ставки купона (кол-во раз в год).",
        "type": "integer"
      },
      "floatratename": {
        "description": "Определение плавающей процентной ставки по купону.",
        "type": "string"
      },
      "has_covenants": {
        "description": "Флаг наличия ковенанты",
        "type": "boolean"
      }
    }
  },
  "Requests.V2.Bond.ConvertationRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный). Для получения данных по конкретному выпуску необходимо использовать фильтр по id_fintool.",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Bond.ConvertationFields": {
    "type": "object",
    "properties": {
      "id_fintool": {
        "format": "int64",
        "description": "Идентификатор облигации",
        "type": "integer"
      },
      "id_fintool_alter": {
        "format": "int64",
        "description": "Идентификатор выпуска ценных бумаг, в который совершается конвертация ценных бумаг. В случае конвертации в акции, по данному идентификатору нельзя будет получить описание с помощью BondService.",
        "type": "integer"
      },
      "begconv_date": {
        "format": "date-time",
        "description": "Дата начала конвертации",
        "type": "string"
      },
      "endconv_date": {
        "format": "date-time",
        "description": "Дата окончания конвертации",
        "type": "string"
      },
      "coefficient": {
        "format": "double",
        "description": "Коэффициент конвертации",
        "type": "number"
      }
    }
  },
  "Requests.V2.Bond.CouponsExtRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный). Для получения купонов конкретного выпуска необходимо использовать фильтр по id_fintool",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Bond.CouponsExtFields": {
    "type": "object",
    "properties": {
      "pay_per_bond_matching": {
        "format": "int32",
        "description": "Соответствие выплаты на одну облигацию",
        "type": "integer"
      },
      "pay_date_matching": {
        "format": "int32",
        "description": "Соответствие даты реальной выплаты купона",
        "type": "integer"
      },
      "fix_date_matching": {
        "format": "int32",
        "description": "Соответствие даты фиксации списка",
        "type": "integer"
      },
      "end_period_matching": {
        "format": "int32",
        "description": "Соответствие даты окончания купона",
        "type": "integer"
      },
      "coupon_rate_matching": {
        "format": "int32",
        "description": "Соответствие ставки купона, процентов годовых",
        "type": "integer"
      },
      "id_fintool": {
        "format": "int64",
        "description": "Идентификатор облигации",
        "type": "integer"
      },
      "id_coupon": {
        "format": "int64",
        "description": "Номер купонной выплаты",
        "type": "integer"
      },
      "begin_period": {
        "format": "date-time",
        "description": "Дата начала купона",
        "type": "string"
      },
      "end_period": {
        "format": "date-time",
        "description": "Дата окончания купона",
        "type": "string"
      },
      "coupon_period": {
        "format": "int64",
        "description": "Количество дней в купонном периоде",
        "type": "integer"
      },
      "days_from_dist": {
        "format": "int64",
        "description": "Количество дней от даты начала размещения до даты окончания купонного периода",
        "type": "integer"
      },
      "coupon_rate": {
        "format": "double",
        "description": "Ставка купона, процентов годовых",
        "type": "number"
      },
      "pay_per_bond": {
        "format": "double",
        "description": "Выплата на одну облигацию",
        "type": "number"
      },
      "coupon_val": {
        "format": "double",
        "description": "Выплаты на все облигации в обращении",
        "type": "number"
      },
      "stop_trade_date": {
        "format": "date-time",
        "description": "Дата приостановки торгов в целях формирования списка владельцев облигаций для осуществления купонной выплаты",
        "type": "string"
      },
      "pay_date": {
        "format": "date-time",
        "description": "Дата реальной выплаты купона",
        "type": "string"
      },
      "coupon_rate_date": {
        "format": "date-time",
        "description": "Дата, не позже которой должна быть определена купонная ставка для будущих дат/дата определения купонной ставки для прошедших дат",
        "type": "string"
      },
      "fix_date": {
        "format": "date-time",
        "description": "Дата фиксации списка",
        "type": "string"
      },
      "update_date": {
        "format": "date-time",
        "description": "Дата/время последнего изменения записи",
        "type": "string"
      },
      "pay_per_bond_frac": {
        "format": "double",
        "description": "Выплата на одну облигацию (без округл.)",
        "type": "number"
      },
      "base_type_id": {
        "format": "int32",
        "description": "ID типа базового индикатора",
        "type": "integer"
      },
      "base_type_name": {
        "description": "Название типа базового индикатора",
        "type": "string"
      },
      "base_fintoolid": {
        "format": "int64",
        "description": "ID базового инструмента в ФинМаркет",
        "type": "integer"
      },
      "rate_spread_pct": {
        "format": "double",
        "description": "Отличие ставки купона от ставки базового индикатора, в %",
        "type": "number"
      },
      "period_from": {
        "format": "date-time",
        "description": "Дата начала действия ставки/правила",
        "type": "string"
      },
      "period_to": {
        "format": "date-time",
        "description": "Дата окончания действия ставки/правила",
        "type": "string"
      }
    }
  },
  "Requests.V2.Bond.DateOptionsRequest": {
    "required": [
      "symbol"
    ],
    "type": "object",
    "properties": {
      "symbol": {
        "description": "ISIN, либо регистрационный номер, либо торговый код",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата определения параметров; если не указана, возвращаются параметры на текущую дату.",
        "type": "string"
      },
      "isCloseRegister": {
        "description": "True указывает на то, что при расчете НКД по амортизируемым бумагам, текущий номинал бумаги будет определяться по датам закрытия реестра, а не по датам непосредственно амортизационных выплат.",
        "type": "boolean"
      },
      "couponForecast": {
        "description": "Пользовательские значения доходности для неизвестных купонов. Разделитель «;».",
        "type": "string"
      },
      "couponBinding": {
        "description": "Даты пользовательских купонов, заданных в параметре couponForecast. Разделитель «;».",
        "type": "string"
      }
    }
  },
  "Bond.DateOptionsResponse": {
    "type": "object",
    "properties": {
      "error": {
        "description": "Текст ошибки при обработке запроса",
        "type": "string"
      },
      "couponDate": {
        "format": "date-time",
        "description": "Дата текущего купона",
        "type": "string"
      },
      "couponPeriod": {
        "format": "int32",
        "description": "Купонный период",
        "type": "integer"
      },
      "couponRate": {
        "format": "double",
        "description": "Ставка текущего купона",
        "type": "number"
      },
      "payPerBond": {
        "format": "double",
        "description": "Выплата на облигацию",
        "type": "number"
      },
      "offerDate": {
        "format": "date-time",
        "description": "Дата ближайшей оферты",
        "type": "string"
      },
      "buyBackPrice": {
        "format": "double",
        "description": "Цена выкупа",
        "type": "number"
      },
      "currentFacevalue": {
        "format": "double",
        "description": "Текущий номинал",
        "type": "number"
      },
      "accruedInterest": {
        "format": "double",
        "description": "НКД",
        "type": "number"
      },
      "listingLevel": {
        "format": "int32",
        "description": "Листинг",
        "type": "integer"
      },
      "sumCouponsMty": {
        "format": "double",
        "description": "Сумма купонов до погашения",
        "type": "number"
      },
      "sumCouponsOffer": {
        "format": "double",
        "description": "Сумма купонов до ближайшей оферты",
        "type": "number"
      },
      "lastFacevalueChangeDate": {
        "format": "date-time",
        "description": "Дата последнего изменения номинала",
        "type": "string"
      }
    }
  },
  "Requests.V2.Bond.DateOptionsFieldsRequest": {
    "type": "object",
    "properties": {}
  },
  "Bond.DateOptionsFieldsFields": {
    "type": "object",
    "properties": {
      "fintool_type": {
        "description": "Тип инструмента, к которому относится поле. Значение ‘BOND’.",
        "type": "string"
      },
      "field_group": {
        "description": "Идентификатор группы полей",
        "type": "string"
      },
      "codename": {
        "description": "Кодовое наименование поля",
        "type": "string"
      },
      "shortname_rus": {
        "description": "Краткое наименование поля(рус.)",
        "type": "string"
      },
      "shortname_eng": {
        "description": "Краткое наименование поля(англ.)",
        "type": "string"
      },
      "fullname_rus": {
        "description": "Полное наименование поля(рус.)",
        "type": "string"
      },
      "fullname_eng": {
        "description": "Полное наименование поля(англ.)",
        "type": "string"
      }
    }
  },
  "Requests.V2.Bond.DateOptionsTableRequest": {
    "required": [
      "symbol"
    ],
    "type": "object",
    "properties": {
      "symbol": {
        "description": "ISIN либо регистрационный номер, либо торговый код",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата определения параметров; если не указана, возвращаются параметры на текущую дату.",
        "type": "string"
      },
      "isCloseRegister": {
        "description": "True указывает на то, что при расчете НКД по амортизируемым бумагам, текущий номинал бумаги будет определяться по датам закрытия реестра, а не по датам непосредственно амортизационных выплат.",
        "type": "boolean"
      },
      "couponForecast": {
        "description": "Пользовательские значения доходности для неизвестных купонов. Разделитель «;».",
        "type": "string"
      },
      "couponBinding": {
        "description": "Даты пользовательских купонов, заданных в параметре couponForecast. Разделитель «;».",
        "type": "string"
      }
    }
  },
  "Bond.DateOptionsTableFields": {
    "type": "object",
    "properties": {
      "is_lombard": {
        "description": "Признак включения в ломбардный список БР",
        "type": "boolean"
      },
      "exch_main": {
        "description": "Название основной площадки, на которой торгуется бумага",
        "type": "string"
      },
      "listing_level": {
        "format": "int32",
        "description": "Уровень листинга Мосбиржи",
        "type": "integer"
      },
      "sum_mktval": {
        "format": "double",
        "description": "Объем в обращении в валюте номинала",
        "type": "number"
      },
      "sum_mktvol": {
        "format": "double",
        "description": "Объем в обращении в штуках",
        "type": "number"
      },
      "cpn_no": {
        "format": "int64",
        "description": "Номер текущего купона",
        "type": "integer"
      },
      "cpn_begdate": {
        "format": "date-time",
        "description": "Дата начала текущего купона",
        "type": "string"
      },
      "cpn_enddate": {
        "format": "date-time",
        "description": "Дата окончания текущего купона",
        "type": "string"
      },
      "cpn_period": {
        "format": "int32",
        "description": "Дней в текущем купонном периоде",
        "type": "integer"
      },
      "cpn_fixlist": {
        "format": "date-time",
        "description": "Дата фиксации списка на выплату купона",
        "type": "string"
      },
      "cpn_rate": {
        "format": "double",
        "description": "Ставка текущего купона, % годовых",
        "type": "number"
      },
      "cpn_value": {
        "format": "double",
        "description": "Выплата на облигацию в валюте номинала",
        "type": "number"
      },
      "cpn_paydate": {
        "format": "date-time",
        "description": "Дата реальной выплаты купона",
        "type": "string"
      },
      "cpn_knownno": {
        "format": "int64",
        "description": "Номер последнего известного купона",
        "type": "integer"
      },
      "cpn_knowndate": {
        "format": "date-time",
        "description": "Дата окончания последнего известного купона",
        "type": "string"
      },
      "newcpn_date": {
        "format": "date-time",
        "description": "Ближайшая дата определения неизвестных будущих купонов",
        "type": "string"
      },
      "mty_date": {
        "format": "date-time",
        "description": "Ближайшая дата погашения части номинала",
        "type": "string"
      },
      "mty_fixdate": {
        "format": "date-time",
        "description": "Дата фиксации списка на выплату погашения",
        "type": "string"
      },
      "mty_part": {
        "format": "double",
        "description": "Погашаемый % от первоначального номинала",
        "type": "number"
      },
      "mty_value": {
        "format": "double",
        "description": "Выплата на облигацию в валюте номинала",
        "type": "number"
      },
      "mty_paydate": {
        "format": "date-time",
        "description": "Реальная дата погашения/выплаты",
        "type": "string"
      },
      "call_date": {
        "format": "date-time",
        "description": "Дата досрочного погашения, опцион эмитента",
        "type": "string"
      },
      "offer_date": {
        "format": "date-time",
        "description": "Расчетная дата(ближайшей) оферты",
        "type": "string"
      },
      "offer_end": {
        "format": "date-time",
        "description": "Дата окончания периода предъявления к выкупу",
        "type": "string"
      },
      "offer_price": {
        "format": "double",
        "description": "Цена выкупа, % от номинала, полная (с НКД)",
        "type": "number"
      },
      "offer_paydate": {
        "format": "date-time",
        "description": "Дата реального выкупа",
        "type": "string"
      },
      "conv_begdate": {
        "format": "date-time",
        "description": "Дата начала конвертации (ближайшей)",
        "type": "string"
      },
      "conv_enddate": {
        "format": "date-time",
        "description": "Дата окончания конвертации (ближайшей)",
        "type": "string"
      },
      "conv_coeff": {
        "format": "double",
        "description": "Коэффициент конвертации(ближайшей)",
        "type": "number"
      },
      "conv_fintoolid": {
        "format": "int64",
        "description": "ID ценной бумаги, в которую совершается конвертация",
        "type": "integer"
      },
      "default_date": {
        "format": "date-time",
        "description": "Дата дефолта",
        "type": "string"
      },
      "default_type": {
        "description": "Тип дефолта, либо отсутствие на заданную дату",
        "type": "string"
      },
      "event_type": {
        "description": "Тип события, на котором возник дефолт",
        "type": "string"
      },
      "duty_paydate": {
        "format": "date-time",
        "description": "Дата реального исполнения обязательства",
        "type": "string"
      },
      "auct_exch": {
        "description": "Название площадки, на кторой пройдет(до)размещение",
        "type": "string"
      },
      "auct_begdate": {
        "format": "date-time",
        "description": "Дата начала(до)размещения (ближайшего)",
        "type": "string"
      },
      "auct_askval": {
        "format": "double",
        "description": "Объем (до)размещаемых облигаций, в валюте номинала",
        "type": "number"
      },
      "auct_askvol": {
        "format": "double",
        "description": "Количество (до)размещаемых облигаций, штук",
        "type": "number"
      },
      "auct_enddate": {
        "format": "date-time",
        "description": "Дата окончания(до)размещения (ближайшего)",
        "type": "string"
      },
      "accrued_int": {
        "format": "double",
        "description": "НКД в валюте номинала",
        "type": "number"
      },
      "accrued_int_pct": {
        "format": "double",
        "description": "НКД в % от номинала",
        "type": "number"
      },
      "current_fv": {
        "format": "double",
        "description": "Текущий номинал в валюте номинала",
        "type": "number"
      },
      "current_fv_pct": {
        "format": "double",
        "description": "Текущий номинал в % от первоначального номинала",
        "type": "number"
      },
      "fairvalue_avg": {
        "format": "double",
        "description": "ТСС в валюте номинала, средневзв.цена биржи",
        "type": "number"
      },
      "fairvalue_nfa": {
        "format": "double",
        "description": "ТСС в валюте номинала, НРД",
        "type": "number"
      },
      "mty_sumcpn": {
        "format": "double",
        "description": "Сумма купонов до погашения",
        "type": "number"
      },
      "offer_sumcpn": {
        "format": "double",
        "description": "Сумма купонов до ближайшей оферты",
        "type": "number"
      }
    }
  },
  "Requests.V2.Bond.DefaultEventsRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный). Для получения данных по конкретному выпуску необходимо использовать фильтр по id_fintool.",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Bond.DefaultEventsFields": {
    "type": "object",
    "properties": {
      "id_fintool": {
        "format": "int64",
        "description": "Идентификатор облигации",
        "type": "integer"
      },
      "default_type": {
        "description": "Тип дефолта",
        "type": "string"
      },
      "event_type": {
        "description": "Тип события, по которому наступил дефолт",
        "type": "string"
      },
      "id_event": {
        "format": "int64",
        "description": "Номер события(в рамках конкретных обязательств, для купонов – номер купона, для выкупов – номер выкупа, для погашения или 1 (в случае отсутствия амортизационного погашения) или номер погашения)",
        "type": "integer"
      },
      "pay_date": {
        "format": "date-time",
        "description": "Дата дефолта",
        "type": "string"
      },
      "real_pay_date": {
        "format": "date-time",
        "description": "Дата реального исполнения обязательства(заполняется в случае технического дефолта)",
        "type": "string"
      },
      "note": {
        "description": "Примечание",
        "type": "string"
      },
      "id": {
        "format": "int64",
        "description": "Идентификатор события",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Bond.DefaultsTableRequest": {
    "type": "object",
    "properties": {
      "ids": {
        "description": "Cписок идентификаторов (ISIN)",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "startDate": {
        "format": "date-time",
        "description": "Дата начала интересующего периода",
        "type": "string"
      },
      "endDate": {
        "format": "date-time",
        "description": "Дата окончания интересующего периода",
        "type": "string"
      }
    }
  },
  "Bond.DefaultsTableFields": {
    "type": "object",
    "properties": {
      "id_fintool": {
        "description": "Идентификатор бумаги (ISIN)",
        "type": "string"
      },
      "default_type": {
        "description": "Тип дефолта",
        "type": "string"
      },
      "event_type": {
        "description": "Тип события, по которому наступил дефолт",
        "type": "string"
      },
      "id_event": {
        "format": "int64",
        "description": "Идентификатор события",
        "type": "integer"
      },
      "pay_date": {
        "format": "date-time",
        "description": "Плановая дата выплат",
        "type": "string"
      },
      "real_pay_date": {
        "format": "date-time",
        "description": "Реальная дата выплат",
        "type": "string"
      },
      "note": {
        "description": "Комментарий",
        "type": "string"
      },
      "id": {
        "format": "int64",
        "description": "Идентификатор записи в БД",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Bond.EmissionDocsRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный). Для получения данных по конкретному выпуску необходимо использовать фильтр по id_fintool.",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Bond.EmissionDocsFields": {
    "type": "object",
    "properties": {
      "id_fintool": {
        "format": "int64",
        "description": "Идентификатор облигации",
        "type": "integer"
      },
      "link": {
        "description": "URL расположения документа",
        "type": "string"
      },
      "caption": {
        "description": "Название документа",
        "type": "string"
      }
    }
  },
  "Requests.V2.RuData.GCurveOFZRequest": {
    "description": "Запрос параметров кривой бескупонной доходности государственных облигаций на дату",
    "required": [
      "date"
    ],
    "type": "object",
    "properties": {
      "date": {
        "format": "date-time",
        "description": "Дата кривой",
        "type": "string"
      }
    }
  },
  "RuData.GCurveOFZResponse": {
    "description": "Кривая бескупонной доходности\r\nОписание формулы и параметров\r\nhttps://www.moex.com/a3642",
    "type": "object",
    "properties": {
      "dt": {
        "format": "date-time",
        "description": "Дата параметров",
        "type": "string"
      },
      "beta0val": {
        "format": "double",
        "type": "number"
      },
      "beta1val": {
        "format": "double",
        "type": "number"
      },
      "beta2val": {
        "format": "double",
        "type": "number"
      },
      "g1val": {
        "format": "double",
        "type": "number"
      },
      "g2val": {
        "format": "double",
        "type": "number"
      },
      "g3val": {
        "format": "double",
        "type": "number"
      },
      "g4val": {
        "format": "double",
        "type": "number"
      },
      "g5val": {
        "format": "double",
        "type": "number"
      },
      "g6val": {
        "format": "double",
        "type": "number"
      },
      "g7val": {
        "format": "double",
        "type": "number"
      },
      "g8val": {
        "format": "double",
        "type": "number"
      },
      "g9val": {
        "format": "double",
        "type": "number"
      },
      "tauval": {
        "format": "double",
        "type": "number"
      }
    }
  },
  "Requests.V2.Bond.ListBondTypesRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный).",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Bond.ListBondTypesFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int64",
        "description": "Идентификатор типа облигации",
        "type": "integer"
      },
      "id_type_group": {
        "format": "int64",
        "description": "Идентификатор категории из справочника категорий (см. метод ListTypeGroups)",
        "type": "integer"
      },
      "shortname_rus": {
        "description": "Краткое наименование типа",
        "type": "string"
      },
      "fullname_rus": {
        "description": "Полное описание типа (может отсутствовать)",
        "type": "string"
      }
    }
  },
  "Requests.V2.Bond.ListOrgRolesRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный).",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Bond.ListOrgRolesFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int64",
        "description": "Идентификатор роли",
        "type": "integer"
      },
      "shortname_rus": {
        "description": "Краткое наименование роли",
        "type": "string"
      },
      "fullname_rus": {
        "description": "Полное описание роли",
        "type": "string"
      },
      "code": {
        "description": "Символьный идентификатор роли",
        "type": "string"
      },
      "shortname_eng": {
        "description": "Краткое английское наименование",
        "type": "string"
      },
      "fullname_eng": {
        "description": "Полное английское описание роли",
        "type": "string"
      },
      "sort_order": {
        "format": "int32",
        "description": "Порядковый номер в иерархии",
        "type": "integer"
      },
      "bond": {
        "format": "int32",
        "description": "Облигации",
        "type": "integer"
      },
      "shar": {
        "format": "int32",
        "description": "Акции",
        "type": "integer"
      },
      "depo": {
        "format": "int32",
        "description": "Депо-расписки",
        "type": "integer"
      },
      "fund": {
        "format": "int32",
        "description": "Фонды",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Bond.ListTypeGroupsRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Bond.ListTypeGroupsFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int64",
        "description": "Идентификатор категории",
        "type": "integer"
      },
      "shortname_rus": {
        "description": "Название категории",
        "type": "string"
      }
    }
  },
  "Requests.V2.Bond.OrganizersRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный). Для получения организаторов конкретного выпуска необходимо использовать фильтр по id_fintool.",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Bond.OrganizersFields": {
    "type": "object",
    "properties": {
      "id_fintool": {
        "format": "int64",
        "description": "Идентификатор облигации",
        "type": "integer"
      },
      "fininstid": {
        "format": "int64",
        "description": "Идентификатор организации",
        "type": "integer"
      },
      "fullname": {
        "description": "Название организации",
        "type": "string"
      },
      "okpo": {
        "description": "Код ОКПО организации",
        "type": "string"
      },
      "id_org_role": {
        "format": "int64",
        "description": "Идентификатор роли организации, применительно к данному выпуску(см. /Bond/ListOrgRoles)",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Bond.ProgramsRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Bond.ProgramsFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int64",
        "description": "Идентификатор программы (id_fintool)",
        "type": "integer"
      },
      "shortname_rus": {
        "description": "Краткое название программы",
        "type": "string"
      },
      "fullname_rus": {
        "description": "Полное название программы",
        "type": "string"
      },
      "fininstid": {
        "format": "int64",
        "description": "Идентификатор эмитента в базе Интерфакс",
        "type": "integer"
      },
      "okpo": {
        "description": "ОКПО эмитента",
        "type": "string"
      },
      "status": {
        "description": "Статус программы",
        "type": "string"
      },
      "country": {
        "description": "Двухбуквенный код страны в соответствии с ОКСМ",
        "type": "string"
      },
      "reg_code": {
        "description": "Регистрационный номер программы",
        "type": "string"
      },
      "reg_date": {
        "format": "date-time",
        "description": "Дата регистрации",
        "type": "string"
      },
      "reg_org": {
        "description": "Регистратор(ФСФР, ЦБ, МосБиржа и т.п.)",
        "type": "string"
      },
      "facevalue": {
        "format": "double",
        "description": "Номинал",
        "type": "number"
      },
      "facevalue_currency": {
        "description": "Валюта номинала",
        "type": "string"
      },
      "issue_vol": {
        "format": "double",
        "description": "Объем программы(в штуках)",
        "type": "number"
      },
      "issue_val": {
        "format": "double",
        "description": "Размер программы(в деньгах)",
        "type": "number"
      },
      "begdist_date": {
        "format": "date-time",
        "description": "Дата начала размещения",
        "type": "string"
      },
      "enddist_date": {
        "format": "date-time",
        "description": "Дата окончания размещения",
        "type": "string"
      },
      "market_vol": {
        "format": "double",
        "description": "Объем в обращении(в штуках)",
        "type": "number"
      },
      "market_val": {
        "format": "double",
        "description": "Объем в обращении(в деньгах)",
        "type": "number"
      },
      "guaranteed": {
        "format": "int32",
        "description": "Признак наличия гарантии по программе",
        "type": "integer"
      },
      "guaranteed_val": {
        "format": "double",
        "description": "Гарантированная сумма",
        "type": "number"
      },
      "coverage_val": {
        "format": "double",
        "description": "Объем ипотечного/иного покрытия по программе",
        "type": "number"
      },
      "have_regress": {
        "format": "int32",
        "description": "Признак наличия полного регресса по программе",
        "type": "integer"
      },
      "emitent_take_risk": {
        "format": "int32",
        "description": "Эмитент принимает на себя часть кредитного риска через сохранение доли в секьюритизируемых активах",
        "type": "integer"
      },
      "debt_cost_ratio": {
        "format": "double",
        "description": "Средняя величина соотношения суммы основного долга по ссудам к текущей(справедливой) стоимости предметов залога на момент выпуска программы",
        "type": "number"
      }
    }
  },
  "Requests.V2.Bond.RiskDataRequest": {
    "required": [
      "calcDate"
    ],
    "type": "object",
    "properties": {
      "calcDate": {
        "format": "date-time",
        "description": "Дата расчета риска (обязательный).",
        "type": "string"
      },
      "filter": {
        "description": "Строка фильтрации (необязательный). Для получения данных по конкретному выпуску необходимо использовать фильтр по id_fintool.",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Bond.RiskDataFields": {
    "type": "object",
    "properties": {
      "id_fintool": {
        "format": "int64",
        "description": "Идентификатор облигации",
        "type": "integer"
      },
      "oecd": {
        "description": "Значение уровня риска в стране эмитента, по данным классификации ОЭСР",
        "type": "string"
      },
      "jurisdiction": {
        "description": "Название страны, в которой зарегистрирован эмитент выпуска",
        "type": "string"
      },
      "currency": {
        "description": "Трехбуквенное стандартное обозначение валюты страны, в которой зарегистрирован эмитент выпуска",
        "type": "string"
      },
      "government": {
        "format": "int32",
        "description": "Признак, что эмитент правительство или ЦБ страны(0/1)",
        "type": "integer"
      },
      "bank": {
        "format": "int32",
        "description": "Признак, что эмитент – банк(0/1)",
        "type": "integer"
      },
      "name_government": {
        "format": "int32",
        "description": "Признак, что эмитент имеет право осуществлять эмиссии от имени государства(0/1)",
        "type": "integer"
      },
      "cis": {
        "format": "int32",
        "description": "Признак, что страна входит в СНГ(за исключением России) (0/1)",
        "type": "integer"
      },
      "srf": {
        "format": "int32",
        "description": "Признак, что эмитент субъект РФ или муниципальное объединение(0/1)",
        "type": "integer"
      },
      "ifo": {
        "format": "int32",
        "description": "Признак, что эмитент – международная банковская организация(0/1)",
        "type": "integer"
      },
      "investmentrating": {
        "format": "double",
        "description": "Признак низкого риска инвестирования(0/1)",
        "type": "number"
      },
      "isregion": {
        "format": "double",
        "type": "number"
      }
    }
  },
  "Requests.V2.Bond.TimeTableRequest": {
    "type": "object",
    "properties": {
      "ids": {
        "description": "Список идентификаторов (ISIN)",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "eventTypes": {
        "description": "Типы событий(CONV, CALL, CPN, MTY);",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "fields": {
        "description": "Список требуемых полей (см. метод TimeTableFields)",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "startDate": {
        "format": "date-time",
        "description": "Дата начала интересующего периода",
        "type": "string"
      },
      "endDate": {
        "format": "date-time",
        "description": "Дата окончания интересующего периода;",
        "type": "string"
      },
      "isShowDefault": {
        "description": "Показывать ли дефолты по событиям.",
        "type": "boolean"
      },
      "pageNum": {
        "format": "int32",
        "description": "Номер страницы",
        "type": "integer"
      },
      "pageSize": {
        "format": "int32",
        "description": "Размер страницы",
        "type": "integer"
      },
      "sortDesc": {
        "description": "Признак сортировки по убыванию времени",
        "type": "boolean"
      }
    }
  },
  "Bond.TimeTableResponse": {
    "type": "object",
    "properties": {
      "timeTableFields": {
        "description": "Список календарных событий для найденных инструментов",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Bond.TimeTableFields"
        }
      },
      "unknownInstruments": {
        "description": "Список имен инструментов, для которых не найдено данных",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    }
  },
  "Bond.TimeTableFields": {
    "type": "object",
    "properties": {
      "fininstId": {
        "format": "int64",
        "description": "Идентификатор эмитента",
        "type": "integer"
      },
      "issuerName": {
        "description": "Наименование эмитента",
        "type": "string"
      },
      "id": {
        "description": "Идентификатор инструмента, введённый пользователем",
        "type": "string"
      },
      "isiNcode": {
        "description": "ISIN инструмента",
        "type": "string"
      },
      "regCode": {
        "description": "Регистрационный код",
        "type": "string"
      },
      "nickname": {
        "description": "Короткое имя инструмента",
        "type": "string"
      },
      "nrDcode": {
        "description": "Код инструмента в НРД",
        "type": "string"
      },
      "finToolID": {
        "format": "int64",
        "description": "Идентификатор выпуска бумаги",
        "type": "integer"
      },
      "type": {
        "format": "int64",
        "type": "integer"
      },
      "eventID": {
        "format": "int64",
        "description": "Номер события",
        "type": "integer"
      },
      "typeOperation": {
        "description": "Субтип события",
        "type": "string"
      },
      "rateDate": {
        "format": "date-time",
        "description": "Дата определения даты либо факта события",
        "type": "string"
      },
      "beginPeriod": {
        "format": "date-time",
        "description": "Начало купонного периода",
        "type": "string"
      },
      "endPeriod": {
        "format": "date-time",
        "description": "Окончание купонного периода",
        "type": "string"
      },
      "couponPeriod": {
        "format": "double",
        "description": "Купонный период",
        "type": "number"
      },
      "couponRate": {
        "format": "double",
        "description": "Ставка купона, процентов годовых",
        "type": "number"
      },
      "pay1Bond": {
        "format": "double",
        "description": "Выплата на одну облигацию",
        "type": "number"
      },
      "moneyFlowVal": {
        "format": "double",
        "description": "Выплаты на все бумаги, задействованные в событии",
        "type": "number"
      },
      "eventTotalVol": {
        "format": "double",
        "description": "Полное количество бумаг, задействованных в событии",
        "type": "number"
      },
      "daysFromDist": {
        "format": "double",
        "description": "Количество дней от даты начала размещения до события",
        "type": "number"
      },
      "execution": {
        "description": "Признак исполнения",
        "type": "string"
      },
      "payDate": {
        "format": "date-time",
        "description": "Дата фактического платежа",
        "type": "string"
      },
      "fixDate": {
        "format": "date-time",
        "description": "Дата фиксации владельцев для участия в событии",
        "type": "string"
      },
      "mtyDate": {
        "format": "date-time",
        "description": "Погашение (части) номинала",
        "type": "string"
      },
      "mtyPart": {
        "format": "double",
        "description": "Процент погашения",
        "type": "number"
      },
      "offerDate": {
        "format": "date-time",
        "description": "Расчетная дата выкупа",
        "type": "string"
      },
      "buyBackPrice": {
        "format": "double",
        "description": "Цена выкупа, в процентах от номинала(грязная)",
        "type": "number"
      },
      "begOrder": {
        "format": "date-time",
        "description": "Начало периода предъявления к выкупу",
        "type": "string"
      },
      "endOrder": {
        "format": "date-time",
        "description": "Окончание периода предъявления к выкупу",
        "type": "string"
      },
      "eventPeriod": {
        "format": "double",
        "description": "Период события",
        "type": "number"
      },
      "convert2FinToolID": {
        "description": "ID выпуска бумаг, в который произведена конвертация",
        "type": "string"
      },
      "coefficient": {
        "format": "double",
        "description": "Коэффициент, с которым происходит конвертация",
        "type": "number"
      },
      "beginConvDate": {
        "format": "date-time",
        "description": "Дата начала конвертации",
        "type": "string"
      },
      "endConvDate": {
        "format": "date-time",
        "description": "Окончание конвертации",
        "type": "string"
      },
      "defaultID": {
        "format": "double",
        "description": "Идентификатор записи в таблице",
        "type": "number"
      },
      "defaultType": {
        "description": "Тип дефолта",
        "type": "string"
      },
      "typeEvent": {
        "description": "Тип события",
        "type": "string"
      },
      "defaultDate": {
        "format": "date-time",
        "description": "Дата дефолта",
        "type": "string"
      },
      "realPayDate": {
        "format": "date-time",
        "description": "Дата реального исполнения обязательства",
        "type": "string"
      },
      "note": {
        "description": "Примечание",
        "type": "string"
      },
      "eventType": {
        "description": "Тип события: CPN, CALL, MTY, CONV, DIV",
        "type": "string"
      },
      "eventDate": {
        "format": "date-time",
        "description": "Дата события",
        "type": "string"
      },
      "beginEventPer": {
        "format": "date-time",
        "description": "Дата начала периода события",
        "type": "string"
      },
      "value": {
        "format": "double",
        "description": "Ставка купона, доля номинала, цена выкупа или коэффициент конвертации",
        "type": "number"
      },
      "faceFTName": {
        "description": "Валюта номинала",
        "type": "string"
      },
      "pay1Security": {
        "format": "double",
        "description": "Выплата на одну ценную бумагу",
        "type": "number"
      },
      "moneyFlowPlan": {
        "format": "double",
        "description": "Выплаты на все бумаги (планируемая величина)",
        "type": "number"
      },
      "protocolDate": {
        "format": "date-time",
        "description": "Дата публикации протокола общего собрания",
        "type": "string"
      },
      "pay1Bond_frac": {
        "format": "double",
        "description": "Выплата на одну облигацию (без округл.)",
        "type": "number"
      },
      "recomendPay1Security": {
        "format": "double",
        "description": "Рекомендация совета директоров по выплате дивидендов на одну акцию, в валюте номинала",
        "type": "number"
      },
      "recomendRateDate": {
        "format": "date-time",
        "description": "Дата рекомендации совета директоров по выплате дивидендов",
        "type": "string"
      },
      "recomendFixDate": {
        "format": "date-time",
        "description": "Рекомендация совета директоров по дате составления списка владельцев для выплаты дивидендов",
        "type": "string"
      },
      "recomendPayDate": {
        "format": "date-time",
        "description": "Рекомендация совета директоров по дате выплаты дивидендов",
        "type": "string"
      },
      "recomendPayDateNominee": {
        "format": "date-time",
        "description": "Рекомендация совета директоров по дате выплаты дивидендов номинальным держателям",
        "type": "string"
      },
      "counter": {
        "format": "int32",
        "description": "Общее количество найденных записей",
        "type": "integer"
      },
      "rn": {
        "format": "int32",
        "description": "Номер записи",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Bond.TimeTableFieldGroupsRequest": {
    "type": "object",
    "properties": {}
  },
  "Bond.TimeTableFieldGroupsFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int32",
        "description": "Идентификатор группы",
        "type": "integer"
      },
      "name": {
        "description": "Наименование группы, англ.",
        "type": "string"
      },
      "order_group": {
        "format": "int32",
        "description": "Номер по порядку",
        "type": "integer"
      },
      "remark": {
        "description": "Наименование группы, рус.",
        "type": "string"
      }
    }
  },
  "Requests.V2.Bond.TimeTableFieldsRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный).",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Bond.TimeTableFieldsFields": {
    "type": "object",
    "properties": {
      "type": {
        "description": "Идентификатор типа инструмента, для которого может быть использовано поле.Доступные значения ‘Bond’, ‘Share’.",
        "type": "string"
      },
      "group": {
        "description": "Наименование группы полей. См.метод TimeTableFieldGroups.",
        "type": "string"
      },
      "field_name": {
        "description": "Код поля",
        "type": "string"
      },
      "field_description": {
        "description": "Описание поля",
        "type": "string"
      },
      "comment": {
        "description": "Комментарий",
        "type": "string"
      },
      "is_default": {
        "format": "int32",
        "description": "Поле присутствует в выборках по-умолчанию.",
        "type": "integer"
      },
      "default_with_group": {
        "description": "Тип событий (группа полей), по которому произошел дефолт",
        "type": "string"
      },
      "order": {
        "format": "double",
        "description": "Порядковый номер поля в рамках группы полей по типу инструмента.",
        "type": "number"
      },
      "id": {
        "format": "int32",
        "description": "Идентификатор поля",
        "type": "integer"
      },
      "id_group": {
        "format": "int32",
        "description": "Идентификатор группы полей. См.метод TimeTableFieldGroups.",
        "type": "integer"
      },
      "id_composite_field": {
        "format": "int32",
        "type": "integer"
      }
    }
  },
  "Requests.V2.CorporateAction.ActionsRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный)",
        "type": "string"
      },
      "instruments": {
        "description": "Список инструментов",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "companies": {
        "description": "Список кодов компаний",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "pageSize": {
        "format": "int32",
        "description": "Размер страницы для постраничного результата",
        "type": "integer"
      },
      "pageNum": {
        "format": "int32",
        "description": "Номер страницы для постраничного результата",
        "type": "integer"
      }
    }
  },
  "CorporateAction.ActionsFields": {
    "type": "object",
    "properties": {
      "msg_id": {
        "format": "int64",
        "description": "УИН сообщения",
        "type": "integer"
      },
      "act_date": {
        "format": "date-time",
        "description": "Дата КД",
        "type": "string"
      },
      "update_date": {
        "format": "date-time",
        "description": "Дата/время обновления связи с инструментом",
        "type": "string"
      },
      "msg_type": {
        "description": "Тип сообщения",
        "type": "string"
      },
      "act_id": {
        "description": "УИН КД",
        "type": "string"
      },
      "act_code": {
        "description": "Код КД",
        "type": "string"
      },
      "fintoolid": {
        "format": "int64",
        "description": "УИН выпуска",
        "type": "integer"
      },
      "isin": {
        "description": "ISIN",
        "type": "string"
      },
      "regcode": {
        "description": "Гос.Рег.Номер",
        "type": "string"
      },
      "nrdcode": {
        "description": "Код НРД",
        "type": "string"
      },
      "nickname": {
        "description": "Краткое наименование",
        "type": "string"
      },
      "fininstid": {
        "format": "int64",
        "description": "УИН эмитента",
        "type": "integer"
      },
      "issuername": {
        "description": "Имя эмитента",
        "type": "string"
      },
      "issuerinn": {
        "description": "ИНН эмитента",
        "type": "string"
      },
      "issuerogrn": {
        "description": "ОГРН эмитента",
        "type": "string"
      },
      "issuerokpo": {
        "description": "ОКПО эмитента",
        "type": "string"
      },
      "issuerefircode": {
        "description": "Код эмитента Интерфакс",
        "type": "string"
      },
      "issuershortname": {
        "description": "Краткое наименование эмитента",
        "type": "string"
      },
      "issuersector": {
        "description": "Сектор эмитента",
        "type": "string"
      },
      "event_effdate": {
        "format": "date-time",
        "description": "Дата вступления события в силу",
        "type": "string"
      },
      "meeting_date": {
        "format": "date-time",
        "description": "Дата собрания",
        "type": "string"
      },
      "meeting_form": {
        "description": "Форма собрания",
        "type": "string"
      },
      "voiting_enddate": {
        "format": "date-time",
        "description": "Дата голосования",
        "type": "string"
      },
      "paydate_plan": {
        "format": "date-time",
        "description": "Дата платежа (план.)",
        "type": "string"
      },
      "event_fixdate": {
        "format": "date-time",
        "description": "Дата фиксации списка",
        "type": "string"
      },
      "event_ddlndate": {
        "format": "date-time",
        "description": "Последний срок заявки",
        "type": "string"
      },
      "paydate_fact": {
        "format": "date-time",
        "description": "Дата платежа (факт)",
        "type": "string"
      },
      "eventper_beg": {
        "format": "date-time",
        "description": "Дата начала купонного периода",
        "type": "string"
      },
      "eventper_end": {
        "format": "date-time",
        "description": "Дата окончания купонного периода",
        "type": "string"
      },
      "div_source": {
        "description": "Источник выплаты дивидендов",
        "type": "string"
      },
      "div_year": {
        "format": "int32",
        "description": "Год, за который производится выплата",
        "type": "integer"
      },
      "app_perbeg": {
        "format": "date-time",
        "description": "Период подачи заявки КД - начало",
        "type": "string"
      },
      "app_perend": {
        "format": "date-time",
        "description": "Период подачи заявки КД - окончание",
        "type": "string"
      },
      "cancel_perbeg": {
        "format": "date-time",
        "description": "Период отзыва - начало",
        "type": "string"
      },
      "cancel_perend": {
        "format": "date-time",
        "description": "Период отзыва – окончание",
        "type": "string"
      },
      "payment_perbeg": {
        "format": "date-time",
        "description": "Период выплаты - начало",
        "type": "string"
      },
      "payment_perend": {
        "format": "date-time",
        "description": "Период выплаты – окончание",
        "type": "string"
      },
      "divpay_sumval": {
        "format": "double",
        "description": "Сумма дивидендов - выплата",
        "type": "number"
      },
      "divrecpt_sumval": {
        "format": "double",
        "description": "Сумма дивидендов - получение",
        "type": "number"
      },
      "price_type": {
        "description": "Тип цены",
        "type": "string"
      },
      "pay1sec": {
        "format": "double",
        "description": "Цена",
        "type": "number"
      },
      "сurrency": {
        "description": "Валюта цены",
        "type": "string"
      },
      "value": {
        "format": "double",
        "description": "Объем события",
        "type": "number"
      },
      "qty_addsec": {
        "format": "double",
        "description": "Добавлено бумаг",
        "type": "number"
      },
      "qty_exsec": {
        "format": "double",
        "description": "Бумаг в наличии",
        "type": "number"
      },
      "qty_newsec": {
        "format": "double",
        "description": "Новых бумаг",
        "type": "number"
      },
      "note": {
        "description": "Дополнительная информация",
        "type": "string"
      },
      "discagencycode": {
        "description": "Символьный код агентства раскрытия",
        "type": "string"
      },
      "disceventid": {
        "format": "int64",
        "description": "Идентификатор существенного факта",
        "type": "integer"
      },
      "disceventtypeid": {
        "format": "int64",
        "description": "Идентификатор типа существенного факта",
        "type": "integer"
      },
      "disceventtype": {
        "description": "Наименование типа существенного факта",
        "type": "string"
      },
      "disceventpublishdate": {
        "format": "date-time",
        "description": "Дата опубликования",
        "type": "string"
      },
      "disceventtext": {
        "description": "Текст существенного факта",
        "type": "string"
      },
      "dealside1_name": {
        "description": "Сторона сделки 1 (наим.)",
        "type": "string"
      },
      "dealside1_inn": {
        "description": "Сторона сделки 1 (ИНН)",
        "type": "string"
      },
      "dealside2_name": {
        "description": "Сторона сделки 2 (наим.)",
        "type": "string"
      },
      "dealside2_inn": {
        "description": "Сторона сделки 2 (ИНН)",
        "type": "string"
      },
      "deal_type": {
        "description": "Тип сделки",
        "type": "string"
      },
      "deal_category": {
        "description": "Категория сделки",
        "type": "string"
      },
      "share_before": {
        "format": "double",
        "description": "Доля до изменения",
        "type": "number"
      },
      "share_after": {
        "format": "double",
        "description": "Доля после изменений",
        "type": "number"
      },
      "fio": {
        "description": "ФИО лица",
        "type": "string"
      },
      "position": {
        "description": "Должность",
        "type": "string"
      },
      "shareord_before": {
        "format": "double",
        "description": "Доля акций до изменения",
        "type": "number"
      },
      "shareord_after": {
        "format": "double",
        "description": "Доля акций после изменения",
        "type": "number"
      },
      "have_bids": {
        "description": "Флаг: На собрании акционеров были приняты решения, приводящие к выкупу ценных бумаг. Актуально для событий с кодом MEET.",
        "type": "boolean"
      },
      "have_prio": {
        "description": "Флаг: На собрании акционеров были приняты решения, приводящие к наличию приоритетного выкупа ценных бумаг. Актуально для событий с кодом MEET",
        "type": "boolean"
      },
      "have_dvca": {
        "description": "Флаг: На собрании акционеров были приняты решения, приводящие к дивидендам по акциям. Актуально для событий с кодом MEET",
        "type": "boolean"
      },
      "payment_type": {
        "description": "Тип указываемого значения выплаты",
        "type": "string"
      },
      "payment_currency": {
        "description": "Валюта выплаты",
        "type": "string"
      },
      "decision_type": {
        "description": "Тип решения по выплате дивидендов",
        "type": "string"
      },
      "total_currency": {
        "description": "Валюта общей суммы выплаченных дивидендов",
        "type": "string"
      },
      "offer_currency": {
        "description": "Валюта цены предложения",
        "type": "string"
      },
      "counter": {
        "format": "int32",
        "description": "Общее количество найденных записей в постраничном поиске",
        "type": "integer"
      },
      "rn": {
        "format": "int32",
        "description": "Номер записи в постраничном выводе",
        "type": "integer"
      }
    }
  },
  "Requests.V2.CorporateAction.FieldsRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      },
      "withDetails": {
        "description": "Флаг уточненного описания полей.  Если 1, то справочник выдается с уточненными описаниями полей для каждого из видов КД. Применимо в случае, если для разных видов КД поле имеет различающиеся смыслы.",
        "type": "boolean"
      },
      "withValues": {
        "description": "Флаг вывода списка допустимых значений полей. Если 1, то справочник выдается со списками допустимых значений полей. Применимо в случае, если для полей существует фиксированный конечный список допустимых значений",
        "type": "boolean"
      }
    }
  },
  "CorporateAction.KindGroupsFields": {
    "type": "object",
    "properties": {
      "code": {
        "description": "Символьный идентификатор группы",
        "type": "string"
      },
      "name_rus": {
        "description": "Наименование группы (рус.)",
        "type": "string"
      },
      "name_eng": {
        "description": "Наименование группы (англ.)",
        "type": "string"
      },
      "order_group": {
        "format": "int64",
        "description": "Порядковый номер группы",
        "type": "integer"
      }
    }
  },
  "Requests.V2.CorporateAction.KindsRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "CorporateAction.KindsFields": {
    "type": "object",
    "properties": {
      "code": {
        "description": "Символьный идентификатор вида КД",
        "type": "string"
      },
      "name_rus": {
        "description": "Наименование вида КД (рус.)",
        "type": "string"
      },
      "name_eng": {
        "description": "Наименование вида КД (англ.)",
        "type": "string"
      },
      "group": {
        "description": "Идентификатор группы видов КД",
        "type": "string"
      },
      "order": {
        "format": "int64",
        "description": "Порядковый номер вида КД",
        "type": "integer"
      }
    }
  },
  "CorporateAction.SourcesFields": {
    "type": "object",
    "properties": {
      "code": {
        "description": "Символьный идентификатор источника",
        "type": "string"
      },
      "name_rus": {
        "description": "Наименование источника (рус.)",
        "type": "string"
      },
      "name_eng": {
        "description": "Наименование источника(англ.)",
        "type": "string"
      }
    }
  },
  "Requests.V2.Forecast.AnalystsRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Forecast.AnalystsFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int32",
        "description": "Идентификатор аналитика",
        "type": "integer"
      },
      "id_market_maker": {
        "format": "int32",
        "description": "Идентификатор компании-маркетмейкера",
        "type": "integer"
      },
      "name_rus": {
        "description": "ФИО аналитика (рус.)",
        "type": "string"
      },
      "name_eng": {
        "description": "ФИО аналитика (англ.)",
        "type": "string"
      },
      "phone": {
        "description": "Телефон",
        "type": "string"
      },
      "email": {
        "description": "Электронная почта",
        "type": "string"
      }
    }
  },
  "Requests.V2.Forecast.EmitentsRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Forecast.EmitentsFields": {
    "type": "object",
    "properties": {
      "fininstid": {
        "format": "int64",
        "description": "Идентификатор эмитента в базе Интерфакс",
        "type": "integer"
      },
      "code": {
        "description": "Символьный код эмитента",
        "type": "string"
      },
      "name_rus": {
        "description": "Наименование эмитента (рус.)",
        "type": "string"
      },
      "name_eng": {
        "description": "Наименование эмитента (англ.)",
        "type": "string"
      },
      "okpo": {
        "description": "ОКПО эмитента",
        "type": "string"
      },
      "inn": {
        "description": "ИНН эмитента",
        "type": "string"
      },
      "ogrn": {
        "description": "ОГРН эмитента",
        "type": "string"
      }
    }
  },
  "Requests.V2.Forecast.MarketMakersRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Forecast.MarketMakersFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int32",
        "description": "Идентификатор компании",
        "type": "integer"
      },
      "name_rus": {
        "description": "Наименование компании (рус.)",
        "type": "string"
      },
      "name_eng": {
        "description": "Наименование компании (англ.)",
        "type": "string"
      },
      "fininstid": {
        "format": "int64",
        "description": "Идентификатор компании в базе Интерфакс",
        "type": "integer"
      },
      "codename": {
        "description": "Символьный код компании",
        "type": "string"
      }
    }
  },
  "Requests.V2.Forecast.PriceConsensusRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Forecast.PriceConsensusFields": {
    "type": "object",
    "properties": {
      "add_date": {
        "format": "date-time",
        "description": "Дата консенсус-прогноза",
        "type": "string"
      },
      "close_price": {
        "format": "double",
        "description": "Цена закрытия на дату add_date",
        "type": "number"
      },
      "concensus_currency": {
        "description": "Буквенный код валюты прогноза цены по ISO 4217",
        "type": "string"
      },
      "concensus_currency_close_price": {
        "format": "double",
        "description": "Цена закрытия в валюте прогноза",
        "type": "number"
      },
      "consensus_num_est": {
        "format": "double",
        "description": "Количество рекомендаций",
        "type": "number"
      },
      "exchange": {
        "description": "Биржа",
        "type": "string"
      },
      "exchange_code": {
        "description": "Биржевой код бумаги",
        "type": "string"
      },
      "exchange_currency": {
        "description": "Валюта биржи для данной бумаги",
        "type": "string"
      },
      "exchange_currency_target_price": {
        "format": "double",
        "description": "Прогнозная цена в валюте биржи",
        "type": "number"
      },
      "exchange_currency_tpchg": {
        "format": "double",
        "description": "Изменение прогнозной цены по отношению к предыдущему прогнозу в валюте биржи",
        "type": "number"
      },
      "exchange_currency_tpchg_pct": {
        "format": "double",
        "description": "Изменение прогнозной цены по отношению к предыдущему прогнозу в валюте биржи в %",
        "type": "number"
      },
      "exchange_name": {
        "description": "Биржевое наименование бумаги",
        "type": "string"
      },
      "fintool_name": {
        "description": "Краткое наименование бумаги",
        "type": "string"
      },
      "fintoolid": {
        "format": "int64",
        "description": "Идентификатор бумаги в базе Интерфакс",
        "type": "integer"
      },
      "id_recomendation": {
        "format": "int32",
        "description": "Идентификатор консенсус-рекомендации(1, 3, 5)",
        "type": "integer"
      },
      "latest_close_price": {
        "format": "double",
        "description": "Цена закрытия на дату latest_date",
        "type": "number"
      },
      "latest_date": {
        "format": "date-time",
        "description": "Дата дата последних торгов",
        "type": "string"
      },
      "rec_buy_pct": {
        "format": "double",
        "description": "Доля рекомендаций \"Покупать\"",
        "type": "number"
      },
      "rec_change": {
        "format": "double",
        "description": "Изменение рекомендации",
        "type": "number"
      },
      "rec_sell_pct": {
        "format": "double",
        "description": "Доля рекомендаций \"Продавать\"",
        "type": "number"
      },
      "rec_hold_pct": {
        "format": "double",
        "description": "Доля рекомендаций \"Держать\"",
        "type": "number"
      },
      "rec_val": {
        "format": "double",
        "description": "Оценка рекомендации в масштабе от -1 до 1",
        "type": "number"
      },
      "recomendation_name": {
        "description": "Консенсус-рекомендация(идентификатор) : \r\nПродавать - 1\r\nДержать - 3\r\nПокупать - 5",
        "type": "string"
      },
      "target_price": {
        "format": "double",
        "description": "Консенсус-прогноз цены",
        "type": "number"
      },
      "tp_chng": {
        "format": "double",
        "description": "Изменение прогнозной цены по отношению к предыдущему прогнозу",
        "type": "number"
      },
      "tp_chng_pct": {
        "format": "double",
        "description": "Изменение прогнозной цены по отношению к предыдущему прогнозу в %",
        "type": "number"
      },
      "tp_chng_m": {
        "format": "double",
        "description": "Абсолютное изменение прогнозной цены за месяц",
        "type": "number"
      },
      "tp_chng_q": {
        "format": "double",
        "description": "Абсолютное изменение прогнозной цены за 3 месяца",
        "type": "number"
      },
      "tp_chng_y": {
        "format": "double",
        "description": "Абсолютное изменение прогнозной цены за год",
        "type": "number"
      },
      "tp_chng_m_pct": {
        "format": "double",
        "description": "Относительное изменение прогнозной цены за месяц",
        "type": "number"
      },
      "tp_chng_q_pct": {
        "format": "double",
        "description": "Относительное изменение прогнозной цены за 3 месяца",
        "type": "number"
      },
      "tp_chng_y_pct": {
        "format": "double",
        "description": "Относительное изменение прогнозной цены за год",
        "type": "number"
      },
      "tp_high": {
        "format": "double",
        "description": "Максимальная из оценок прогнозной цены",
        "type": "number"
      },
      "tp_low": {
        "format": "double",
        "description": "Минимальная из оценок прогнозной цены",
        "type": "number"
      },
      "tp_median": {
        "format": "double",
        "description": "Медианная оценка прогнозной цены",
        "type": "number"
      },
      "tp_deviation": {
        "format": "double",
        "description": "Стандартное отклонение по оценкам прогнозной цены",
        "type": "number"
      },
      "upside_pct": {
        "format": "double",
        "description": "Потенциал в %",
        "type": "number"
      },
      "fintoolid_linked": {
        "format": "int64",
        "description": "Идентификатор сопряженной бумаги в базе Интерфакс. Указывается только в случае, если сопряженная бумага используется для расчета консенсуса.",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Forecast.SecuritiesRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Forecast.SecuritiesFields": {
    "type": "object",
    "properties": {
      "name": {
        "description": "Краткое наименование бумаги",
        "type": "string"
      },
      "fininstid": {
        "format": "int64",
        "description": "Идентификатор эмитента бумаги в базе Интерфакс",
        "type": "integer"
      },
      "fintoolid": {
        "format": "int64",
        "description": "Идентификатор бумаги",
        "type": "integer"
      },
      "fullname": {
        "description": "Полное наименование бумаги",
        "type": "string"
      },
      "isin": {
        "description": "ISIN",
        "type": "string"
      },
      "exchange_code": {
        "description": "Биржевой код",
        "type": "string"
      },
      "exchange_name": {
        "description": "Биржевое наименование",
        "type": "string"
      },
      "currency": {
        "description": "Валюта консенсуса",
        "type": "string"
      },
      "decimals": {
        "format": "int32",
        "description": "Точность расчета консенсуса",
        "type": "integer"
      },
      "fintooltype": {
        "description": "Тип финансового инструмента (наименование). Список возможных значений возвращает метод /Info/EnumValues.",
        "type": "string"
      },
      "securitytype": {
        "description": "Тип выпуска/расписки/фонда.Список возможных значений возвращает метод /Info/EnumValues.",
        "type": "string"
      },
      "drqty": {
        "format": "double",
        "description": "Количество расписок",
        "type": "number"
      },
      "shqty": {
        "format": "double",
        "description": "Количество представляемых бумаг",
        "type": "number"
      }
    }
  },
  "Requests.V2.Forecast.TargetPricesRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Forecast.TargetPricesFields": {
    "type": "object",
    "properties": {
      "add_date": {
        "format": "date-time",
        "description": "Дата обновления/подтверждения прогноза",
        "type": "string"
      },
      "close_price": {
        "format": "double",
        "description": "Цена закрытия на дату add_date",
        "type": "number"
      },
      "comment": {
        "description": "Комментарий",
        "type": "string"
      },
      "exchange": {
        "description": "Биржа",
        "type": "string"
      },
      "exchange_code": {
        "description": "Биржевой код бумаги",
        "type": "string"
      },
      "exchange_currency": {
        "description": "Валюта биржи для данной бумаги",
        "type": "string"
      },
      "exchange_currency_target_price": {
        "format": "double",
        "description": "Прогнозная цена в валюте биржи",
        "type": "number"
      },
      "exchange_currency_tp_last_date": {
        "format": "double",
        "description": "Прогнозная цена в валюте биржи на дату last_date",
        "type": "number"
      },
      "exchange_currency_tpchg": {
        "format": "double",
        "description": "Изменение прогнозной цены по отношению к предыдущему прогнозу в валюте биржи",
        "type": "number"
      },
      "exchange_currency_tpchg_pct": {
        "format": "double",
        "description": "Изменение прогнозной цены по отношению к предыдущему прогнозу в валюте биржи в %",
        "type": "number"
      },
      "exchange_name": {
        "description": "Биржевое наименование бумаги",
        "type": "string"
      },
      "exchange_currency_prev_target": {
        "format": "double",
        "description": "Предыдущая прогнозная цена в валюте биржи",
        "type": "number"
      },
      "fintoolid": {
        "format": "int64",
        "description": "Идентификатор бумаги в базе Интерфакс",
        "type": "integer"
      },
      "fintoolid_linked": {
        "format": "int64",
        "description": "Идентификатор сопряженной бумаги в базе Интерфакс",
        "type": "integer"
      },
      "fintool_name": {
        "description": "Краткое наименование бумаги",
        "type": "string"
      },
      "id": {
        "format": "int64",
        "description": "Идентификатор прогноза в базе Интерфакс",
        "type": "integer"
      },
      "id_analyst": {
        "format": "int32",
        "description": "Идентификатор аналитика",
        "type": "integer"
      },
      "id_market_maker": {
        "format": "int32",
        "description": "Идентификатор компании-маркетмейкера",
        "type": "integer"
      },
      "id_recomendation": {
        "format": "int32",
        "description": "Идентификатор рекомендации (1..6)",
        "type": "integer"
      },
      "id_status": {
        "format": "int32",
        "description": "Идентификатор статуса цены (1..4)",
        "type": "integer"
      },
      "last_close_price": {
        "format": "double",
        "description": "Цена закрытия на дату last_date.",
        "type": "number"
      },
      "last_date": {
        "format": "date-time",
        "description": "Дата последнего изменения прогнозной цены, т.е. дата, когда была впервые установлена текущая прогнозная цена.",
        "type": "string"
      },
      "latest_close_price": {
        "format": "double",
        "description": "Цена закрытия на дату latest_date",
        "type": "number"
      },
      "latest_date": {
        "format": "date-time",
        "description": "Дата последних торгов",
        "type": "string"
      },
      "market_maker_codename": {
        "description": "Символьный код компании-маркетмейкера",
        "type": "string"
      },
      "market_maker_name_eng": {
        "description": "Наименование компании-маркетмейкера(англ.)",
        "type": "string"
      },
      "market_maker_name_rus": {
        "description": "Наименование компании-маркетмейкера (рус.)",
        "type": "string"
      },
      "prev_close_price": {
        "format": "double",
        "description": "Цена закрытия на дату prev_date",
        "type": "number"
      },
      "prev_date": {
        "format": "date-time",
        "description": "Дата установки предыдущего прогноза",
        "type": "string"
      },
      "prev_target_currency": {
        "description": "Буквенный код валюты предыдущего прогноза цены по ISO 4217",
        "type": "string"
      },
      "prev_target_currency_prevclose": {
        "format": "double",
        "description": "Цена закрытия на дату prev_date в валюте предыдущего прогноза",
        "type": "number"
      },
      "prev_target_price": {
        "format": "double",
        "description": "Предыдущий прогноз цены",
        "type": "number"
      },
      "qty_fintoolid": {
        "format": "double",
        "description": "Количество основных бумаг в соотношении с сопряженными",
        "type": "number"
      },
      "qty_fintoolid_linked": {
        "format": "double",
        "description": "Количество сопряженных бумаг в соотношении с основными",
        "type": "number"
      },
      "recomendation_name": {
        "description": "Рекомендация (идентификатор) :\r\nПродавать - 1\r\nПересмотр - 2\r\nДержать - 3\r\nОтозвана - 4\r\nПокупать - 5\r\nНет - 6",
        "type": "string"
      },
      "status_name": {
        "description": "Статус цены:\r\nДействует - 1\r\nОтзыв - 2\r\nПересмотр - 3\r\nНет - 4",
        "type": "string"
      },
      "target_currency": {
        "description": "Буквенный код валюты прогноза цены по ISO 4217",
        "type": "string"
      },
      "target_currency_close_price": {
        "format": "double",
        "description": "Цена закрытия в валюте прогноза",
        "type": "number"
      },
      "target_currency_cp_last_date": {
        "format": "double",
        "description": "Цена закрытия на дату last_date в валюте прогноза",
        "type": "number"
      },
      "target_price": {
        "format": "double",
        "description": "Прогноз цены",
        "type": "number"
      },
      "tpchg": {
        "format": "double",
        "description": "Изменение прогнозной цены по отношению к предыдущему прогнозу",
        "type": "number"
      },
      "tpchg_pct": {
        "format": "double",
        "description": "Изменение прогнозной цены по отношению к предыдущему прогнозу в %",
        "type": "number"
      },
      "update_date": {
        "format": "date-time",
        "description": "Дата/время обновления прогноза",
        "type": "string"
      },
      "upside_pct": {
        "format": "double",
        "description": "Потенциал в %",
        "type": "number"
      }
    }
  },
  "Requests.V2.Indicator.ConstituentsRequest": {
    "description": "",
    "type": "object",
    "properties": {
      "fintoolIds": {
        "description": "Список ID индикаторов",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "format": "int64",
          "type": "integer"
        }
      },
      "dateFrom": {
        "format": "date-time",
        "description": "Дата начала интервала",
        "type": "string"
      },
      "dateTo": {
        "format": "date-time",
        "description": "Дата окончания интервала",
        "type": "string"
      },
      "pageNum": {
        "format": "int32",
        "description": "Номер страницы",
        "type": "integer"
      },
      "pageSize": {
        "format": "int32",
        "description": "Размер страницы",
        "type": "integer"
      },
      "filter": {
        "description": "Фильтр",
        "type": "string"
      }
    }
  },
  "Indicator.ConstituentFields": {
    "type": "object",
    "properties": {
      "index_fintoolid": {
        "format": "int64,key",
        "description": "Идентификатор индекса в базе Интерфакс",
        "type": "integer"
      },
      "dt": {
        "format": "date-time",
        "description": "Дата расчета",
        "type": "string"
      },
      "fintoolid": {
        "format": "int64,key",
        "description": "Идентификатор инструмента - составляющей индекса",
        "type": "integer"
      },
      "weight": {
        "format": "double",
        "description": "Вес инструмента в составе индекса",
        "type": "number"
      },
      "weight_chng": {
        "format": "double",
        "description": "Изменение веса",
        "type": "number"
      },
      "close": {
        "format": "double",
        "description": "Цена закрытия по инструменту",
        "type": "number"
      },
      "issue_vol": {
        "format": "int64",
        "description": "Объем выпуска, шт.",
        "type": "integer"
      },
      "mcap": {
        "format": "double",
        "description": "Капитализация инструмента",
        "type": "number"
      },
      "issue_vol_index": {
        "format": "int64",
        "description": "Объем выпуска для расчета индекса",
        "type": "integer"
      },
      "mcap_index": {
        "format": "double",
        "description": "Капитализация для расчета индекса",
        "type": "number"
      },
      "ff_factor": {
        "format": "double",
        "description": "Free-float фактор",
        "type": "number"
      },
      "weight_factor": {
        "format": "double",
        "description": "Ограничитель веса",
        "type": "number"
      },
      "num_trades": {
        "format": "int64",
        "description": "Количество сделок",
        "type": "integer"
      },
      "volatility": {
        "format": "double",
        "description": "Волатильность",
        "type": "number"
      },
      "factor_a": {
        "format": "double",
        "description": "Фактор Альфа",
        "type": "number"
      },
      "factor_b": {
        "format": "double",
        "description": "Фактор Бэта",
        "type": "number"
      },
      "influence": {
        "format": "double",
        "description": "Вклад инструмента в изменение индекса",
        "type": "number"
      },
      "determinant": {
        "format": "double",
        "description": "Детерминант",
        "type": "number"
      },
      "counter": {
        "format": "int32",
        "description": "Общеее количество записей в выборке",
        "type": "integer"
      },
      "rn": {
        "format": "int32",
        "description": "Номер записи в выборке",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Indicator.ListRequest": {
    "description": "",
    "type": "object",
    "properties": {
      "filter": {
        "description": "Фильтр",
        "type": "string"
      },
      "pageNum": {
        "format": "int32",
        "description": "Номер страницы выборки",
        "type": "integer"
      },
      "pageSize": {
        "format": "int32",
        "description": "Количество записей на странице",
        "type": "integer"
      }
    }
  },
  "Indicator.ListFields": {
    "type": "object",
    "properties": {
      "fintoolid": {
        "format": "int64,key",
        "description": "Идентификатор индикатора в базе Интерфакс",
        "type": "integer"
      },
      "fininstid": {
        "format": "int64",
        "description": "Идентификатор организации в базе Интерфакс",
        "type": "integer"
      },
      "fullname": {
        "description": "Полное наименование индикатора (рус.)",
        "type": "string"
      },
      "nickname": {
        "description": "Краткое наименование индикатора (рус.)",
        "type": "string"
      },
      "enickname": {
        "description": "Краткое наименование индикатора (анг.)",
        "type": "string"
      },
      "country": {
        "description": "Двухбуквенный код страны в соответствии с ОКСМ",
        "type": "string"
      },
      "begdistdate": {
        "format": "date-time",
        "description": "Дата начала действия",
        "type": "string"
      },
      "endmtydate": {
        "format": "date-time",
        "description": "Дата окончания действия",
        "type": "string"
      },
      "status": {
        "description": "Статус",
        "type": "string"
      },
      "facevalue": {
        "format": "double",
        "description": "Номинал",
        "type": "number"
      },
      "isincode": {
        "description": "ISIN",
        "type": "string"
      },
      "faceftname": {
        "description": "Валюта номинала",
        "type": "string"
      },
      "id_iss": {
        "format": "int64",
        "description": "Идентификатор соответствующего торгового инструмента в базе Интерфакс",
        "type": "integer"
      },
      "hasconstituents": {
        "format": "int32",
        "description": "Индикатор (индекс) имеет составные части (0/1)",
        "type": "integer"
      },
      "indicatorkind_id": {
        "format": "int64",
        "description": "Идентификатор вида индикатора",
        "type": "integer"
      },
      "indicatorkind": {
        "description": "Наименование вида индикатора",
        "type": "string"
      },
      "indicatortype_id": {
        "format": "int64",
        "description": "Идентификатор типа актива",
        "type": "integer"
      },
      "indicatortype": {
        "description": "Наименование типа актива",
        "type": "string"
      },
      "termtype_id": {
        "format": "int64",
        "description": "Идентификатор типа срочности",
        "type": "integer"
      },
      "termtype": {
        "description": "Наименование типа срочности",
        "type": "string"
      },
      "discounttype_id": {
        "format": "int64",
        "description": "Идентификатор типа дисконта",
        "type": "integer"
      },
      "discounttype": {
        "description": "Наименование типа дисконта",
        "type": "string"
      },
      "counter": {
        "format": "int32",
        "description": "Количество записей в выборке",
        "type": "integer"
      },
      "rn": {
        "format": "int32",
        "description": "Номер записи в выборке",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Info.BankBranchesRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Info.BankBranchesFields": {
    "type": "object",
    "properties": {
      "fininstid": {
        "format": "int64,key",
        "description": "Идентификатор банка в базе Интерфакс",
        "type": "integer"
      },
      "bank_name": {
        "description": "Наименование банка",
        "type": "string"
      },
      "bank_regnum": {
        "description": "Регистрационный номер банка (номер лицензии)",
        "type": "string"
      },
      "branchid": {
        "format": "int64,key",
        "description": "Идентификатор отделения",
        "type": "integer"
      },
      "branch_name": {
        "description": "Наименование отделения",
        "type": "string"
      },
      "branch_address": {
        "description": "Адрес отделения",
        "type": "string"
      },
      "contactid": {
        "format": "int64",
        "description": "Идентификатор группы курсов в рамках банка/отделения",
        "type": "integer"
      },
      "latitude": {
        "description": "Координата отделения – широта",
        "type": "string"
      },
      "longitude": {
        "description": "Координата отделения – долгота",
        "type": "string"
      }
    }
  },
  "Requests.V2.RuData.CalendarRequestEx": {
    "type": "object",
    "properties": {
      "isinIds": {
        "description": "Список индентификаторов (ISIN, RegCode, NrdCode)",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "fintoolIds": {
        "description": "Список идентификаторов (fintoolId)",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "format": "int64",
          "type": "integer"
        }
      },
      "eventTypes": {
        "description": "Типы событий(CONV, CALL, CPN, MTY, DIV);",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "fields": {
        "description": "Список требуемых полей (см. метод TimeTableFields)",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "filter": {
        "description": "Дополнительный фильтр",
        "type": "string"
      },
      "startDate": {
        "format": "date-time",
        "description": "Дата начала интересующего периода",
        "type": "string"
      },
      "endDate": {
        "format": "date-time",
        "description": "Дата окончания интересующего периода;",
        "type": "string"
      },
      "isShowDefault": {
        "description": "Показывать ли дефолты по событиям.",
        "type": "boolean"
      },
      "pageNum": {
        "format": "int32",
        "description": "Номер страницы",
        "type": "integer"
      },
      "pageSize": {
        "format": "int32",
        "description": "Размер страницы",
        "type": "integer"
      },
      "sortDesc": {
        "description": "Признак сортировки по убыванию времени",
        "type": "boolean"
      }
    }
  },
  "Requests.V2.Info.ClassificationRequest": {
    "required": [
      "dictionaryName"
    ],
    "type": "object",
    "properties": {
      "dictionaryName": {
        "description": "«ReferenceData» - классификатор для метода FintoolReferenceData;\r\n«Securities» - классификатор для метода Securities.",
        "type": "string"
      },
      "treeDepth": {
        "format": "int32",
        "description": "",
        "type": "integer"
      }
    }
  },
  "Info.ClassificationFields": {
    "type": "object",
    "properties": {
      "fintooltype": {
        "description": "Тип финансового инструмента (наименование).",
        "type": "string"
      },
      "securitytype": {
        "description": "Тип выпуска/расписки/фонда",
        "type": "string"
      },
      "securitykind": {
        "description": "Вид выпуска/спонсируемость/тип инвестиций",
        "type": "string"
      },
      "fullname_rus": {
        "description": "Наименование типа выпуска/расписки/фонда",
        "type": "string"
      },
      "count": {
        "format": "int64",
        "description": "Количество финансовых инструментов, соответствующих данной классификации",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Info.ClassificationCodesRequest": {
    "type": "object",
    "properties": {
      "usage": {
        "format": "int32",
        "description": "Ограничивает классификатор по области применения:\r\n1 – инструменты\r\n2 – эмитенты\r\n0 или не задан – инструменты + эмитенты",
        "type": "integer"
      }
    }
  },
  "Info.ClassificationCodesResponse": {
    "type": "object",
    "properties": {
      "groups": {
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Info.ClassificationGroup"
        }
      }
    }
  },
  "Info.ClassificationGroup": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int64,key",
        "description": "Идентификатор группы",
        "type": "integer"
      },
      "shortNameRus": {
        "description": "Краткое наименование группы (рус.)",
        "type": "string"
      },
      "fullNameRus": {
        "description": "Полное наименование группы (рус.)",
        "type": "string"
      },
      "classificators": {
        "description": "Массив объектов Classificator",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Info.Classificator"
        }
      }
    }
  },
  "Info.Classificator": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int64,key",
        "description": "Идентификатор",
        "type": "integer"
      },
      "shortNameRus": {
        "description": "Краткое наименование (рус.)",
        "type": "string"
      },
      "fullNameRus": {
        "description": "Полное наименование (рус.)",
        "type": "string"
      },
      "forUseIn": {
        "description": "Значение поля ForUseIn указывает на применимость классификатора:\r\n«I» - инструменты\r\n«T» - эмитенты",
        "type": "string"
      }
    }
  },
  "Requests.V2.Info.CurrenciesRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      },
      "withKKV": {
        "description": "",
        "type": "boolean"
      }
    }
  },
  "Requests.V2.Info.CurrencyCodesRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Info.CurrencyCodesFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int64,key",
        "description": "Идентификатор записи в базе Интерфакс",
        "type": "integer"
      },
      "fintoolid": {
        "format": "int64",
        "description": "Идентификатор валюты как инструмента в базе Интерфакс",
        "type": "integer"
      },
      "id_code": {
        "format": "int64",
        "description": "Идентификатор классификатора (значение поля ID объекта Classificator из метода ClassificationCodes)",
        "type": "integer"
      },
      "code": {
        "description": "Значение классификатора",
        "type": "string"
      },
      "from_date": {
        "format": "date-time",
        "description": "Дата начала действия значения классификатора",
        "type": "string"
      },
      "up_to_date": {
        "format": "date-time",
        "description": "Дата окончания действия значения классификатора",
        "type": "string"
      }
    }
  },
  "Requests.V2.Info.DeletedSecuritiesRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Info.DeletedSecuritiesFields": {
    "type": "object",
    "properties": {
      "id_fintool": {
        "format": "int64,key",
        "description": "Идентификатор инструмента",
        "type": "integer"
      },
      "delete_date": {
        "format": "date-time",
        "description": "Дата удаления",
        "type": "string"
      }
    }
  },
  "Requests.V2.Info.EmissionDocsRequest": {
    "type": "object",
    "properties": {
      "ids": {
        "description": "Список идентификаторов (ISIN, регистрационный номер)",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "fields": {
        "description": "Список запрашиваемых полей",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    }
  },
  "Info.EmissionDocsResponse": {
    "type": "object",
    "properties": {
      "emissionDocs": {
        "description": "Список объектов класса EmissionDocsFields для найденных инструментов",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Info.EmissionDocsFields"
        }
      },
      "unknownInstruments": {
        "description": "Список имен инструментов, для которых не найдено данных",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    }
  },
  "Info.EmissionDocsFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": ",key",
        "description": "Идентификатор инструмента",
        "type": "string"
      },
      "nickname": {
        "description": "Краткое наименование инструмента",
        "type": "string"
      },
      "isincode": {
        "description": "ISIN",
        "type": "string"
      },
      "regcode": {
        "description": "Регистрационный номер",
        "type": "string"
      },
      "nrdcode": {
        "description": "Код НРД",
        "type": "string"
      },
      "fintoolid": {
        "format": "int64",
        "description": "Идентификтор Интерфакс",
        "type": "integer"
      },
      "fintooltype": {
        "description": "Тип финансового инструмента(наименование)",
        "type": "string"
      },
      "securitytype": {
        "description": "Тип выпуска/расписки/фонда",
        "type": "string"
      },
      "securitykind": {
        "description": "Вид выпуска/спонсируемость/тип инвестиций",
        "type": "string"
      },
      "status": {
        "description": "Статус инструмента",
        "type": "string"
      },
      "caption": {
        "description": "Название документа",
        "type": "string"
      },
      "doctype": {
        "description": "Тип документа",
        "type": "string"
      },
      "link": {
        "description": "Ссылка на документ",
        "type": "string"
      }
    }
  },
  "Requests.V2.Info.EmitentClassificationRequest": {
    "required": [
      "dateFrom"
    ],
    "type": "object",
    "properties": {
      "dateFrom": {
        "format": "date-time",
        "description": "Дата начала действия классификации. (обязательный)",
        "type": "string"
      },
      "dateTo": {
        "format": "date-time",
        "description": "Дата окончания действия классификации. (необязательный)",
        "type": "string"
      },
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Info.EmitentClassificationFields": {
    "type": "object",
    "properties": {
      "fininstid": {
        "format": "int64,key",
        "description": "Идентификатор эмитента в базе Интерфакс",
        "type": "integer"
      },
      "inn": {
        "description": "ИНН",
        "type": "string"
      },
      "okpo": {
        "description": "ОКПО",
        "type": "string"
      },
      "sparkid": {
        "format": "int64",
        "description": "Идентификатор эмитента в базе СПАРК",
        "type": "integer"
      },
      "id_code": {
        "format": "int64",
        "description": "Идентификатор классификатора (значение поля ID объекта Classificator из метода ClassificationCodes)",
        "type": "integer"
      },
      "code": {
        "description": "Значение классификатора",
        "type": "string"
      },
      "from_date": {
        "format": "date-time",
        "description": "Дата начала действия значения классификатора",
        "type": "string"
      },
      "up_to_date": {
        "format": "date-time",
        "description": "Дата окончания действия значения классификатора",
        "type": "string"
      }
    }
  },
  "Requests.V2.Info.EmitentsRequest": {
    "type": "object",
    "properties": {
      "ids": {
        "uniqueItems": false,
        "type": "array",
        "items": {
          "format": "int64",
          "type": "integer"
        }
      },
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      },
      "inn_as_string": {
        "description": "Признак вывода кодов в текстовом виде (необязательный): TRUE – выводить основные коды в текстовом виде (с ведущими нулями)",
        "type": "boolean"
      }
    }
  },
  "Info.EmitentsFields": {
    "type": "object",
    "properties": {
      "id_emitent": {
        "format": "int32",
        "description": "Идентификатор эмитента",
        "type": "integer"
      },
      "fininstid": {
        "format": "int64,key",
        "description": "Идентификатор эмитента в базе Интерфакс",
        "type": "integer"
      },
      "shortname_rus": {
        "description": "Наименование эмитента (рус.)",
        "type": "string"
      },
      "shortname_eng": {
        "description": "Наименование эмитента (англ.)",
        "type": "string"
      },
      "inn": {
        "description": "ИНН для российских компаний, TIN/TAX для остальных",
        "type": "string"
      },
      "okpo": {
        "description": "ОКПО",
        "type": "string"
      },
      "ogrn": {
        "description": "ОГРН",
        "type": "string"
      },
      "code": {
        "description": "Символьный идентификатор эмитента",
        "type": "string"
      },
      "sector": {
        "description": "Отрасль (по основной деятельности)",
        "type": "string"
      },
      "legal_address": {
        "description": "Юридический адрес",
        "type": "string"
      },
      "phone": {
        "description": "Телефоны",
        "type": "string"
      },
      "www": {
        "description": "Адрес веб-сайта",
        "type": "string"
      },
      "update_date": {
        "format": "date-time",
        "description": "Дата последних изменений информации по эмитенту",
        "type": "string"
      },
      "fullname_rus_nrd": {
        "description": "Полное наименование эмитента в базе НРД (рус)",
        "type": "string"
      },
      "fullname_eng_nrd": {
        "description": "Полное наименование эмитента на ин. языке в базе НРД",
        "type": "string"
      },
      "shortname_rus_nrd": {
        "description": "Краткое наименование эмитента в базе НРД (рус)",
        "type": "string"
      },
      "shortname_eng_nrd": {
        "description": "Краткое наименование на ин. языке в базе НРД",
        "type": "string"
      },
      "company_type_short_name": {
        "description": "Краткое наименование организационно-правовой формы (рус)",
        "type": "string"
      },
      "state_reg_num": {
        "description": "Регистрационный номер",
        "type": "string"
      },
      "state_reg_date": {
        "format": "date-time",
        "description": "Дата первичной регистрации",
        "type": "string"
      },
      "state_reg_name": {
        "description": "Орган, зарегистрировавший юр.лицо",
        "type": "string"
      },
      "egrul_date": {
        "format": "date-time",
        "description": "Дата государственной регистрации",
        "type": "string"
      },
      "egrul_organ_name": {
        "description": "Орган, внесший запись в ЕГРЮЛ",
        "type": "string"
      },
      "country": {
        "description": "Страна регистрации, 3-букв.код по ОКСМ",
        "type": "string"
      },
      "lei_code": {
        "description": "LEI-код",
        "type": "string"
      },
      "bik": {
        "description": "БИК",
        "type": "string"
      },
      "fax": {
        "description": "Факс",
        "type": "string"
      },
      "e_mail": {
        "description": "Электронная почта",
        "type": "string"
      },
      "credit_cmp": {
        "description": "“Y” для кредитной организации",
        "type": "string"
      },
      "is_bank_4_non_resident": {
        "description": "“Y” для иностранной кредитной организации",
        "type": "string"
      },
      "swift": {
        "description": "Код SWIFT",
        "type": "string"
      },
      "country_oksm": {
        "format": "int32",
        "description": "Цифровой код страны по ОКСМ",
        "type": "integer"
      },
      "country_name_rus": {
        "description": "Наименование страны (рус)",
        "type": "string"
      },
      "country_name_eng": {
        "description": "Наименование страны (анг)",
        "type": "string"
      },
      "region_inn": {
        "description": "Код региона по ИНН",
        "type": "string"
      },
      "region_soato": {
        "description": "Код региона по СОАТО",
        "type": "string"
      },
      "region_name": {
        "description": "Наименование региона (для российских эмитентов)",
        "type": "string"
      },
      "fullname_rus": {
        "description": "Полное наименование эмитента (рус)",
        "type": "string"
      },
      "sparkid": {
        "format": "int64",
        "description": "Идентификатор эмитента в базе СПАРК",
        "type": "integer"
      },
      "br_fcsm_reg_code": {
        "description": "Регистрационный номер ФСФР/ЦБ РФ",
        "type": "string"
      },
      "capital": {
        "format": "decimal(20,2)",
        "description": "Уставный капитал",
        "type": "number"
      },
      "capital_unit": {
        "description": "Валюта уставного капитала",
        "type": "string"
      },
      "okved": {
        "description": "Код основного ОКВЭД2",
        "type": "string"
      },
      "oecd_lvl": {
        "description": "Классификация страны ОЭСР",
        "type": "string"
      },
      "oktmo": {
        "description": "Код общероссийского классификатора территорий муниципальных образований",
        "type": "string"
      },
      "okato": {
        "description": "Код общероссийского классификатора объектов административно-территориального деления",
        "type": "string"
      },
      "post_address": {
        "description": "Адрес почтовый",
        "type": "string"
      },
      "okopf": {
        "description": "ОКОПФ",
        "type": "string"
      },
      "okogu": {
        "description": "ОКОГУ",
        "type": "string"
      },
      "have_rating": {
        "format": "int32",
        "description": "'Y' если есть хоть один активный рейтинг",
        "type": "integer"
      },
      "have_risk": {
        "format": "int32",
        "description": "'Y' если организация представлена в блоке по рискам",
        "type": "integer"
      },
      "is_finorg": {
        "format": "int32",
        "description": "'Y' для финансовой организации",
        "type": "integer"
      },
      "is_control_by_finorg": {
        "format": "int32",
        "description": "'Y' для компаний, контролируемых финансовыми организациями",
        "type": "integer"
      },
      "is_gov_or_cb": {
        "format": "int32",
        "description": "Правительство или Центральный Банк",
        "type": "integer"
      },
      "on_behalf_of_state": {
        "format": "int32",
        "description": "Имеет право заимствовать от лица государства, страны",
        "type": "integer"
      },
      "is_subjectrf": {
        "format": "int32",
        "description": "Субъект РФ или муниципальное образование РФ",
        "type": "integer"
      },
      "is_cis_reg": {
        "format": "int32",
        "description": "Признак регистрации на территории СНГ(кроме России)",
        "type": "integer"
      },
      "issuer_nrd": {
        "description": "Идентификатор эмитента в базе НРД",
        "type": "string"
      },
      "tin": {
        "description": "TIN (США)",
        "type": "string"
      },
      "kpp": {
        "description": "КПП",
        "type": "string"
      },
      "state_reg_number": {
        "description": "Номер государственной регистрации при создании",
        "type": "string"
      },
      "market_id_nrd": {
        "format": "int64",
        "description": "Идентификатор сектора рынка НРД",
        "type": "integer"
      },
      "market_name_rus_nrd": {
        "description": "Наименование сектора рынка НРД (рус.)",
        "type": "string"
      },
      "market_name_eng_nrd": {
        "description": "Наименование сектора рынка НРД (англ.)",
        "type": "string"
      },
      "sp_rx_entity_id": {
        "description": "Standard&amp;Poor's Rating Express Entity Identificator",
        "type": "string"
      },
      "sp_shortname": {
        "description": "Standard &amp; Poor's NickName",
        "type": "string"
      },
      "mds_shortname": {
        "description": "Moody's NickName",
        "type": "string"
      },
      "mds_org_id": {
        "description": "Moody's Organization Identificator",
        "type": "string"
      },
      "fch_id": {
        "description": "Fitch Investors Identificator",
        "type": "string"
      },
      "fch_shortname": {
        "description": "Fitch Investors NickName",
        "type": "string"
      },
      "is_monopoly": {
        "format": "int32",
        "description": "Реестр естественных монополий",
        "type": "integer"
      },
      "is_strategic": {
        "format": "int32",
        "description": "Перечень стратегических предприятий",
        "type": "integer"
      },
      "ifo_list": {
        "description": "Вхождение эмитента в список МФО('МФО1' или 'МФО2')",
        "type": "string"
      },
      "isregion": {
        "format": "int32",
        "description": "1 – субъект РФ; 0 – муниципалитет РФ; пусто – иное.",
        "type": "integer"
      },
      "sic": {
        "type": "string"
      },
      "sector4212u": {
        "type": "string"
      },
      "sna2008": {
        "type": "string"
      },
      "reg_code": {
        "description": "Государственный регистрационный номер",
        "type": "string"
      },
      "reg_date": {
        "format": "date-time",
        "description": "Дата регистрации (данные Интерфакс)",
        "type": "string"
      },
      "reg_org": {
        "description": "Регистрирующий орган (данные Интерфакс)",
        "type": "string"
      }
    }
  },
  "Requests.V2.Info.EmitentsExtRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      },
      "inn_as_string": {
        "description": "Признак вывода кодов в текстовом виде (необязательный): TRUE – выводить основные коды в текстовом виде (с ведущими нулями)",
        "type": "boolean"
      }
    }
  },
  "Info.EmitentsExtFields": {
    "type": "object",
    "properties": {
      "id_emitent": {
        "format": "int32",
        "description": "Идентификатор эмитента",
        "type": "integer"
      },
      "shortname_rus": {
        "description": "Наименование эмитента (рус.)",
        "type": "string"
      },
      "shortname_eng": {
        "description": "Наименование эмитента (англ.)",
        "type": "string"
      },
      "inn": {
        "description": "ИНН для российских компаний, TIN/TAX для остальных",
        "type": "string"
      },
      "okpo": {
        "description": "ОКПО",
        "type": "string"
      },
      "ogrn": {
        "description": "ОГРН",
        "type": "string"
      },
      "code": {
        "description": "Символьный идентификатор эмитента",
        "type": "string"
      },
      "fininstid": {
        "format": "int64,key",
        "description": "Идентификатор эмитента в базе Интерфакс",
        "type": "integer"
      },
      "fcsm_code_matching": {
        "format": "int32",
        "description": "Соответствие регистрационных номеров выпуска",
        "type": "integer"
      },
      "inn_matching": {
        "format": "int32",
        "description": "Соответствие ИНН",
        "type": "integer"
      },
      "kpp_matching": {
        "format": "int32",
        "description": "Соответствие КПП",
        "type": "integer"
      },
      "okpo_matching": {
        "format": "int32",
        "description": "Соответствие ОКПО",
        "type": "integer"
      },
      "okved_matching": {
        "format": "int32",
        "description": "Соответствие ОКВЭД",
        "type": "integer"
      },
      "reg_code_matching": {
        "format": "int32",
        "description": "Соответствие ОГРН",
        "type": "integer"
      },
      "sector": {
        "description": "Отрасль (по основной деятельности)",
        "type": "string"
      },
      "legal_address": {
        "description": "Юридический адрес",
        "type": "string"
      },
      "phone": {
        "description": "Телефоны",
        "type": "string"
      },
      "www": {
        "description": "Адрес веб-сайта",
        "type": "string"
      },
      "update_date": {
        "format": "date-time",
        "description": "Дата последних изменений информации по эмитенту",
        "type": "string"
      },
      "fullname_rus_nrd": {
        "description": "Полное наименование эмитента в базе НРД (рус)",
        "type": "string"
      },
      "fullname_eng_nrd": {
        "description": "Полное наименование эмитента на ин. языке в базе НРД",
        "type": "string"
      },
      "shortname_rus_nrd": {
        "description": "Краткое наименование эмитента в базе НРД (рус)",
        "type": "string"
      },
      "shortname_eng_nrd": {
        "description": "Краткое наименование на ин. языке в базе НРД",
        "type": "string"
      },
      "company_type_short_name": {
        "description": "Краткое наименование организационно-правовой формы (рус)",
        "type": "string"
      },
      "state_reg_num": {
        "description": "Регистрационный номер",
        "type": "string"
      },
      "state_reg_date": {
        "format": "date-time",
        "description": "Дата первичной регистрации",
        "type": "string"
      },
      "state_reg_name": {
        "description": "Орган, зарегистрировавший юр.лицо",
        "type": "string"
      },
      "egrul_date": {
        "format": "date-time",
        "description": "Дата государственной регистрации",
        "type": "string"
      },
      "egrul_organ_name": {
        "description": "Орган, внесший запись в ЕГРЮЛ",
        "type": "string"
      },
      "country": {
        "description": "Страна регистрации, 3-букв.код по ОКСМ",
        "type": "string"
      },
      "lei_code": {
        "description": "LEI-код",
        "type": "string"
      },
      "bik": {
        "description": "БИК",
        "type": "string"
      },
      "fax": {
        "description": "Факс",
        "type": "string"
      },
      "e_mail": {
        "description": "Электронная почта",
        "type": "string"
      },
      "credit_cmp": {
        "description": "“Y” для кредитной организации",
        "type": "string"
      },
      "is_bank_4_non_resident": {
        "description": "“Y” для иностранной кредитной организации",
        "type": "string"
      },
      "swift": {
        "description": "Код SWIFT",
        "type": "string"
      },
      "country_oksm": {
        "format": "int32",
        "description": "Цифровой код страны по ОКСМ",
        "type": "integer"
      },
      "country_name_rus": {
        "description": "Наименование страны (рус)",
        "type": "string"
      },
      "country_name_eng": {
        "description": "Наименование страны (анг)",
        "type": "string"
      },
      "region_inn": {
        "description": "Код региона по ИНН",
        "type": "string"
      },
      "region_soato": {
        "description": "Код региона по СОАТО",
        "type": "string"
      },
      "region_name": {
        "description": "Наименование региона (для российских эмитентов)",
        "type": "string"
      },
      "fullname_rus": {
        "description": "Полное наименование эмитента (рус)",
        "type": "string"
      },
      "sparkid": {
        "format": "int64",
        "description": "Идентификатор эмитента в базе СПАРК",
        "type": "integer"
      },
      "br_fcsm_reg_code": {
        "description": "Регистрационный номер ФСФР/ЦБ РФ",
        "type": "string"
      },
      "capital": {
        "format": "decimal(20,2)",
        "description": "Уставный капитал",
        "type": "number"
      },
      "capital_unit": {
        "description": "Валюта уставного капитала",
        "type": "string"
      },
      "okved": {
        "description": "Код основного ОКВЭД2",
        "type": "string"
      },
      "oecd_lvl": {
        "description": "Классификация страны ОЭСР",
        "type": "string"
      },
      "oktmo": {
        "description": "Код общероссийского классификатора территорий муниципальных образований",
        "type": "string"
      },
      "okato": {
        "description": "Код общероссийского классификатора объектов административно-территориального деления",
        "type": "string"
      },
      "post_address": {
        "description": "Адрес почтовый",
        "type": "string"
      },
      "okopf": {
        "description": "ОКОПФ",
        "type": "string"
      },
      "okogu": {
        "description": "ОКОГУ",
        "type": "string"
      },
      "have_rating": {
        "format": "int32",
        "description": "'Y' если есть хоть один активный рейтинг",
        "type": "integer"
      },
      "have_risk": {
        "format": "int32",
        "description": "'Y' если организация представлена в блоке по рискам",
        "type": "integer"
      },
      "is_finorg": {
        "format": "int32",
        "description": "'Y' для финансовой организации",
        "type": "integer"
      },
      "is_control_by_finorg": {
        "format": "int32",
        "description": "'Y' для компаний, контролируемых финансовыми организациями",
        "type": "integer"
      },
      "is_gov_or_cb": {
        "format": "int32",
        "description": "Правительство или Центральный Банк",
        "type": "integer"
      },
      "on_behalf_of_state": {
        "format": "int32",
        "description": "Имеет право заимствовать от лица государства, страны",
        "type": "integer"
      },
      "is_subjectrf": {
        "format": "int32",
        "description": "Субъект РФ или муниципальное образование РФ",
        "type": "integer"
      },
      "is_cis_reg": {
        "format": "int32",
        "description": "Признак регистрации на территории СНГ(кроме России)",
        "type": "integer"
      },
      "issuer_nrd": {
        "description": "Идентификатор эмитента в базе НРД",
        "type": "string"
      },
      "tin": {
        "description": "TIN (США)",
        "type": "string"
      },
      "kpp": {
        "description": "КПП",
        "type": "string"
      },
      "state_reg_number": {
        "description": "Номер государственной регистрации при создании",
        "type": "string"
      },
      "market_id_nrd": {
        "format": "int64",
        "description": "Идентификатор сектора рынка НРД",
        "type": "integer"
      },
      "market_name_rus_nrd": {
        "description": "Наименование сектора рынка НРД (рус.)",
        "type": "string"
      },
      "market_name_eng_nrd": {
        "description": "Наименование сектора рынка НРД (англ.)",
        "type": "string"
      },
      "sp_rx_entity_id": {
        "description": "Standard &amp; Poor's Rating Express Entity Identificator",
        "type": "string"
      },
      "sp_shortname": {
        "description": "Standard &amp; Poor's NickName",
        "type": "string"
      },
      "mds_shortname": {
        "description": "Moody's NickName",
        "type": "string"
      },
      "mds_org_id": {
        "description": "Moody's Organization Identificator",
        "type": "string"
      },
      "fch_id": {
        "description": "Fitch Investors Identificator",
        "type": "string"
      },
      "fch_shortname": {
        "description": "Fitch Investors NickName",
        "type": "string"
      },
      "is_monopoly": {
        "format": "int32",
        "description": "Реестр естественных монополий",
        "type": "integer"
      },
      "is_strategic": {
        "format": "int32",
        "description": "Перечень стратегических предприятий",
        "type": "integer"
      },
      "ifo_list": {
        "description": "Вхождение эмитента в список МФО('МФО1' или 'МФО2')",
        "type": "string"
      },
      "isregion": {
        "format": "int32",
        "description": "1 – субъект РФ; 0 – муниципалитет РФ; пусто – иное.",
        "type": "integer"
      },
      "sic": {
        "description": "Стандартный отраслевой классификатор",
        "type": "string"
      },
      "sector4212u": {
        "description": "Сектор согласно 4212-У (банки)",
        "type": "string"
      },
      "sna2008": {
        "description": "Система национальных счетов 2008",
        "type": "string"
      },
      "reg_code": {
        "description": "Государственный регистрационный номер",
        "type": "string"
      },
      "reg_date": {
        "format": "date-time",
        "description": "Дата регистрации (данные Интерфакс)",
        "type": "string"
      },
      "reg_org": {
        "description": "Регистрирующий орган (данные Интерфакс)",
        "type": "string"
      }
    }
  },
  "Requests.V2.Info.EnumsRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Info.EnumsFields": {
    "type": "object",
    "properties": {
      "dictionary_name": {
        "description": "Идентификатор классификатора",
        "type": "string"
      },
      "field_name": {
        "description": "Идентификатор поля",
        "type": "string"
      }
    }
  },
  "Requests.V2.Info.EnumValuesRequest": {
    "required": [
      "dictionaryName",
      "fieldName"
    ],
    "type": "object",
    "properties": {
      "dictionaryName": {
        "description": "Используются строки:\r\n«ReferenceData» - для метода FintoolReferenceData\r\n«Securities» - для метода Securities",
        "type": "string"
      },
      "fieldName": {
        "description": "Идентификатор поля с перечислением. См. метод Enums.",
        "type": "string"
      }
    }
  },
  "Info.EnumValuesFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int64",
        "description": "Идентификатор значения",
        "type": "integer"
      },
      "val": {
        "description": "Значение",
        "type": "string"
      },
      "fullname_rus": {
        "description": "Наименование значения",
        "type": "string"
      }
    }
  },
  "Requests.V2.Info.ExchangeTreeRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Info.ExchangeTreeFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int32,key",
        "description": "Идентификатор площадки в базе Интерфакс",
        "type": "integer"
      },
      "id_parent": {
        "format": "int32",
        "description": "Идентификатор родительской площадки в базе Интерфакс",
        "type": "integer"
      },
      "shortname_rus": {
        "description": "Краткое наименование площадки (рус.)",
        "type": "string"
      },
      "shortname_eng": {
        "description": "Краткое наименование площадки (англ.)",
        "type": "string"
      },
      "fullname_rus": {
        "description": "Полное наименование площадки(рус.)",
        "type": "string"
      },
      "fullname_eng": {
        "description": "Полное наименование площадки(англ.)",
        "type": "string"
      },
      "sort_order": {
        "format": "int32",
        "description": "Порядковый номер в иерархии",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Info.FieldsRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      },
      "parameters": {
        "description": "",
        "type": "string"
      }
    }
  },
  "Info.FieldsFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int64,key",
        "description": "Идентификатор поля",
        "type": "integer"
      },
      "name": {
        "description": "Кодовое наименование поля",
        "type": "string"
      },
      "full_name_rus": {
        "description": "Наименование поля (рус.)",
        "type": "string"
      },
      "full_name_eng": {
        "description": "Наименование поля (англ.)",
        "type": "string"
      },
      "comment_rus": {
        "description": "Комментарий (рус.)",
        "type": "string"
      },
      "comment_eng": {
        "description": "Комментарий (англ.)",
        "type": "string"
      },
      "activity": {
        "format": "int32",
        "description": "Активность",
        "type": "integer"
      },
      "visible": {
        "format": "int32",
        "description": "Видимость",
        "type": "integer"
      },
      "id_fields_group": {
        "format": "int32",
        "description": "Идентификатор группы полей",
        "type": "integer"
      },
      "fields_group_name": {
        "description": "Наименование группы полей",
        "type": "string"
      },
      "ctype": {
        "description": "Тип данных",
        "type": "string"
      },
      "can_alert": {
        "format": "int32",
        "description": "Возможность использования в алертах",
        "type": "integer"
      },
      "functional_field": {
        "format": "int32",
        "description": "Функциональное ли поле (в большинстве случаев показывает меняется поле или нет в онлайне)",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Info.FintoolClassificationRequest": {
    "required": [
      "dateFrom"
    ],
    "type": "object",
    "properties": {
      "dateFrom": {
        "format": "date-time",
        "description": "Дата начала действия классификации. (обязательный)",
        "type": "string"
      },
      "dateTo": {
        "format": "date-time",
        "description": "Дата окончания действия классификации. (необязательный)",
        "type": "string"
      },
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Info.FintoolClassificationFields": {
    "type": "object",
    "properties": {
      "fintoolid": {
        "format": "int64,key",
        "type": "integer"
      },
      "isin": {
        "type": "string"
      },
      "reg_code": {
        "type": "string"
      },
      "fininstid": {
        "format": "int64",
        "type": "integer"
      },
      "inn": {
        "type": "string"
      },
      "okpo": {
        "type": "string"
      },
      "sparkid": {
        "format": "int64",
        "type": "integer"
      },
      "id_code": {
        "format": "int64",
        "type": "integer"
      },
      "code": {
        "type": "string"
      },
      "from_date": {
        "format": "date-time,key",
        "type": "string"
      },
      "up_to_date": {
        "format": "date-time",
        "type": "string"
      }
    }
  },
  "Requests.V2.Info.FintoolConvertationRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный). \r\nДля получения данных по конкретному выпуску необходимо использовать фильтр по fintoolid.",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Info.FintoolConvertationFields": {
    "type": "object",
    "properties": {
      "beg_conv_date": {
        "format": "date-time",
        "description": "Дата начала конвертации",
        "type": "string"
      },
      "coeficient": {
        "format": "decimal(20,4)",
        "description": "Коэффициент конвертации",
        "type": "number"
      },
      "end_conv_date": {
        "format": "date-time",
        "description": "Дата окончания конвертации",
        "type": "string"
      },
      "fintoolid": {
        "format": "int64,key",
        "description": "Идентификатор инструмента",
        "type": "integer"
      },
      "id_fintool_alter": {
        "format": "int64,key",
        "description": "Идентификатор выпуска ценных бумаг, в который совершается конвертация ценных бумаг.",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Info.FintoolFieldsRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный). \r\nДля получения полей, доступных для какого-либо из типов инструментов необходимо использовать соответствующее значение фильтра:\r\nFINTOOL_TYPE='BOND' – поля для облигаций\r\nFINTOOL_TYPE='SHARE' – поля для акций\r\nFINTOOL_TYPE='DEPO' – поля для депозитарных расписок\r\nFINTOOL_TYPE='FUND' – поля для фондов\r\nFINTOOL_TYPE='MPC' – поля для ИСУ",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Info.FintoolFieldsFields": {
    "type": "object",
    "properties": {
      "fintool_type": {
        "description": "Тип инструмента, к которому относится поле",
        "type": "string"
      },
      "field_group": {
        "description": "Идентификатор группы полей",
        "type": "string"
      },
      "codename": {
        "description": "Кодовое наименование поля",
        "type": "string"
      },
      "fullname_rus": {
        "description": "Наименование поля (рус.)",
        "type": "string"
      },
      "comment_rus": {
        "description": "Дополнительный комментарий к полю (рус.)",
        "type": "string"
      },
      "field_type": {
        "description": "Тип источника:\r\n‘Checked’ - сверено, источник Интерфакс\r\n‘IFX’ - не сверено, источник Интерфакс\r\n‘Marker’ - маркер сверки\r\n‘NRD’ – источник НРД",
        "type": "string"
      },
      "codename_rus": {
        "type": "string"
      }
    }
  },
  "Requests.V2.Info.FintoolFieldsExtRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Info.FintoolFieldsExtFields": {
    "type": "object",
    "properties": {
      "fintool_type": {
        "description": "Тип инструмента, к которому относится поле",
        "type": "string"
      },
      "field_group": {
        "description": "Идентификатор группы полей",
        "type": "string"
      },
      "codename": {
        "description": "Кодовое наименование поля",
        "type": "string"
      },
      "fullname_rus": {
        "description": "Полное наименование поля (рус.)",
        "type": "string"
      },
      "comment_rus": {
        "description": "Дополнительный комментарий к полю (рус.)",
        "type": "string"
      },
      "field_type": {
        "description": "Тип источника:\r\n‘Checked’ - сверено, источник Интерфакс\r\n‘IFX’ - не сверено, источник Интерфакс\r\n‘Marker’ - маркер сверки\r\n‘NRD’ – источник НРД.",
        "type": "string"
      },
      "codename_rus": {
        "description": "Краткое наименование поля (рус.)",
        "type": "string"
      },
      "сsharp_field_type": {
        "description": "Тип данных поля",
        "type": "string"
      },
      "for_filter": {
        "format": "int32",
        "description": "0/1. Поле может использоваться для фильтрации данных",
        "type": "integer"
      },
      "for_report": {
        "format": "int32",
        "description": "0/1. Поле может использоваться в отчетах",
        "type": "integer"
      },
      "for_fixed": {
        "format": "int32",
        "description": "0/1. Поле всегда используется в отчетах",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Info.FintoolListingRequest": {
    "required": [
      "id"
    ],
    "type": "object",
    "properties": {
      "id": {
        "description": "Идентификатор инструмента",
        "type": "string"
      },
      "idType": {
        "description": "Тип идентификатора инструмента (isin | regcode | fintoolid)",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата расчета",
        "type": "string"
      },
      "withStat": {
        "format": "int32",
        "description": "0/1. Вычислять торговую статистику по инструменту.",
        "type": "integer"
      }
    }
  },
  "Info.FintoolListingFields": {
    "type": "object",
    "properties": {
      "id_fintool": {
        "format": "int64",
        "type": "integer"
      },
      "code_type": {
        "type": "string"
      },
      "id_iss": {
        "format": "int64",
        "type": "integer"
      },
      "id_exchange_tree": {
        "format": "int32",
        "type": "integer"
      },
      "listing_level": {
        "type": "string"
      },
      "boardid": {
        "type": "string"
      },
      "if_main": {
        "format": "int32",
        "type": "integer"
      },
      "numtrades_30": {
        "format": "int64",
        "type": "integer"
      },
      "volume_30": {
        "format": "int64",
        "type": "integer"
      },
      "numtrades_90": {
        "format": "int64",
        "type": "integer"
      },
      "volume_90": {
        "format": "int64",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Info.FintoolReferenceDataListRequest": {
    "required": [
      "fintool_ids"
    ],
    "type": "object",
    "properties": {
      "fintool_ids": {
        "uniqueItems": false,
        "type": "array",
        "items": {
          "format": "int64",
          "type": "integer"
        }
      },
      "fields": {
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    }
  },
  "Info.FintoolReferenceDataFields": {
    "type": "object",
    "properties": {
      "facevalue_m": {
        "format": "int32",
        "description": "Маркер сравнения данных НРД и Интерфакса",
        "type": "integer"
      },
      "faceftname_m": {
        "format": "int32",
        "description": "Маркер сравнения данных НРД и Интерфакса",
        "type": "integer"
      },
      "sumissuevol_m": {
        "format": "int32",
        "description": "Маркер сравнения данных НРД и Интерфакса",
        "type": "integer"
      },
      "summarketvol_m": {
        "format": "int32",
        "description": "Маркер сравнения данных НРД и Интерфакса",
        "type": "integer"
      },
      "numcoupons_m": {
        "format": "int32",
        "description": "Маркер сравнения данных НРД и Интерфакса",
        "type": "integer"
      },
      "nrdcode": {
        "description": "Код НРД финансового инструмента",
        "type": "string"
      },
      "regcode_m": {
        "format": "int32",
        "description": "Маркер сравнения данных НРД и Интерфакса",
        "type": "integer"
      },
      "regdate_m": {
        "format": "int32",
        "description": "Маркер сравнения данных НРД и Интерфакса",
        "type": "integer"
      },
      "regdistdate_m": {
        "format": "int32",
        "description": "Маркер сравнения данных НРД и Интерфакса",
        "type": "integer"
      },
      "begdistdate_m": {
        "format": "int32",
        "description": "Маркер сравнения данных НРД и Интерфакса",
        "type": "integer"
      },
      "enddistdate_m": {
        "format": "int32",
        "description": "Маркер сравнения данных НРД и Интерфакса",
        "type": "integer"
      },
      "endmtydate_m": {
        "format": "int32",
        "description": "Маркер сравнения данных НРД и Интерфакса",
        "type": "integer"
      },
      "daysall_m": {
        "format": "int32",
        "description": "Маркер сравнения данных НРД и Интерфакса",
        "type": "integer"
      },
      "fullname_nrd": {
        "description": "Полное название финансового инструмента по базе НРД",
        "type": "string"
      },
      "rpregorg_nrd": {
        "description": "Орган, осуществивший регистрацию отчета по базе НРД",
        "type": "string"
      },
      "rpstate_nrd": {
        "description": "Состояние отчета о выпуске по базе НРД. Список возможных значений возвращает метод /EnumValues (‘referenceData’, ‘RpState_NRD’).",
        "type": "string"
      },
      "issuenumber": {
        "description": "Номер выпуска по базе НРД",
        "type": "string"
      },
      "currentfacevalue_nrd": {
        "format": "decimal(38,20)",
        "description": "Текущий номинал облигации с учетом амортизации по базе НРД",
        "type": "number"
      },
      "isqualified_nrd": {
        "format": "int32",
        "description": "Для квалифицированных инвесторов (1/0) по базе НРД",
        "type": "integer"
      },
      "bondseries": {
        "description": "Номер серии по базе НРД",
        "type": "string"
      },
      "islombardcbr_nrd": {
        "format": "int32",
        "description": "Включение в ломбардный список (1/0) по базе НРД",
        "type": "integer"
      },
      "numcoupons_nrd": {
        "format": "int32",
        "description": "Количество купонов всего по базе НРД",
        "type": "integer"
      },
      "facevalue_nrd": {
        "format": "decimal(38,20)",
        "description": "Номинал финансового инструмента по базе НРД",
        "type": "number"
      },
      "faceftname_nrd": {
        "description": "Валюта номинала финансового инструмента по базе НРД. Список возможных значений возвращает метод EnumValues (‘referenceData’, ‘FaceFTName_NRD’).",
        "type": "string"
      },
      "summarketvol_nrd": {
        "format": "decimal(30,0)",
        "description": "Объем в обращении в штуках по базе НРД",
        "type": "number"
      },
      "regcode_nrd": {
        "description": "Регистрационный номер финансового инструмента в базе НРД",
        "type": "string"
      },
      "regdate_nrd": {
        "format": "date-time",
        "description": "Дата государственной регистрации выпуска в базе НРД",
        "type": "string"
      },
      "regorg_nrd": {
        "description": "Регистрирующий орган по базе НРД",
        "type": "string"
      },
      "begdistdate_nrd": {
        "format": "date-time",
        "description": "Дата начала размещения по базе НРД",
        "type": "string"
      },
      "daysall_nrd": {
        "format": "int32",
        "description": "Количество дней с даты начала размещения до даты окончания погашения облигации по базе НРД",
        "type": "integer"
      },
      "enddistdate_nrd": {
        "format": "date-time",
        "description": "Дата окончания размещения по базе НРД",
        "type": "string"
      },
      "endmtydate_nrd": {
        "format": "date-time",
        "description": "Дата погашения финансового инструмента по базе НРД",
        "type": "string"
      },
      "regdistdate_nrd": {
        "format": "date-time",
        "description": "Дата регистрации отчета о выпуске финансового инструмента / дата отсылки уведомления по базе НРД",
        "type": "string"
      },
      "sumissuevol_nrd": {
        "format": "decimal(30,0)",
        "description": "Заявленный объем эмиссии в штуках по базе НРД",
        "type": "number"
      },
      "drqty": {
        "format": "int64",
        "description": "Количество ДР",
        "type": "integer"
      },
      "isincodebase_nrd": {
        "description": "ISIN-код выпуска акций, на которые выпущены расписки",
        "type": "string"
      },
      "nrdcompcode": {
        "description": "Код НРД эмитента",
        "type": "string"
      },
      "shqty": {
        "format": "int64",
        "description": "Количество представляемых ц.б.",
        "type": "integer"
      },
      "summarketvolorig_nrd": {
        "format": "decimal(30,0)",
        "description": "Размещенное количество шт. (первоначальные данные)",
        "type": "integer"
      },
      "issuername_nrd": {
        "description": "Название оператора выпуска финансового инструмента по базе НРД",
        "type": "string"
      },
      "planmtydate_nrd": {
        "format": "date-time",
        "description": "Дата погашения плановая",
        "type": "string"
      },
      "firstcoupondate_nrd": {
        "format": "date-time",
        "description": "Дата начала начисления первого купона",
        "type": "string"
      },
      "depositary_nrd": {
        "description": "Уполномоченный депозитарий",
        "type": "string"
      },
      "registrar_nrd": {
        "description": "Реестродержатель",
        "type": "string"
      },
      "placeprice_nrd": {
        "format": "decimal(24,8)",
        "description": "Цена размещения в валюте номинала",
        "type": "number"
      },
      "micexlist_nrd": {
        "description": "Листинг/внесписочные (ФБ ММВБ)",
        "type": "string"
      },
      "minlot_nrd": {
        "format": "decimal(24,8)",
        "description": "Минимальный лот (в валюте номинала) для проведения расчетов в ISCD",
        "type": "number"
      },
      "formarketbonds_nrd": {
        "format": "int32",
        "description": "Признак биржевой облигации",
        "type": "integer"
      },
      "registraracctype_nrd": {
        "description": "Тип лицевого счета (НД или НДЦД). Список возможных значений возвращает метод EnumValues (‘referenceData’, ‘RegistrarAccType_NRD’).",
        "type": "string"
      },
      "registraracctypedate_nrd": {
        "format": "date-time",
        "description": "Дата открытия лицевого счета/изменения типа ЛС",
        "type": "string"
      },
      "facialacc_nrd": {
        "description": "Номер лицевого счета",
        "type": "string"
      },
      "acc_open_date_nrd": {
        "format": "date-time",
        "description": "Дата первого открытия ЛС в реестре",
        "type": "string"
      },
      "fraction_nrd": {
        "format": "int32",
        "description": "Количество знаков после запятой",
        "type": "integer"
      },
      "specialized_depo_nrd": {
        "description": "Код НРД специализированного депозитария",
        "type": "string"
      },
      "cmp_code_nsd_issuer_nrd": {
        "description": "Код НРД фонда/ИСУ",
        "type": "string"
      },
      "cmp_code_nsd_managing_nrd": {
        "description": "Код НРД управляющего ипотечным покрытием",
        "type": "string"
      },
      "ratetypenamerus_nrd": {
        "description": "Наименование вида купона (процента), русское. Список возможных значений возвращает метод EnumValues (‘referenceData’, ‘RateTypeNameRus_NRD’).",
        "type": "string"
      },
      "ratetypenameeng_nrd": {
        "description": "Наименование вида купона (процента), английское. Список возможных значений возвращает метод EnumValues (‘referenceData’, ‘PlacementType_NRD’).",
        "type": "string"
      },
      "coupontypename_nrd": {
        "description": "Наименование типа купонного периода. Список возможных значений возвращает метод EnumValues (‘referenceData’, ‘CouponTypeName_NRD’).",
        "type": "string"
      },
      "base_month": {
        "description": "Базовый месяц по базе НРД",
        "type": "string"
      },
      "base_year": {
        "description": "Базовый год по базе НРД",
        "type": "string"
      },
      "basis_nrd": {
        "description": "Базис НКД по базе НРД. Список возможных значений возвращает метод EnumValues (‘referenceData’, ‘Basis_NRD’).",
        "type": "string"
      },
      "sectypenamerus_nrd": {
        "description": "Наименование типа ценных бумаг, русское. Список возможных значений возвращает метод EnumValues (‘referenceData’, ‘SecTypeNameRus_NRD’).",
        "type": "string"
      },
      "sectypenameeng_nrd": {
        "description": "Наименование типа ценных бумаг, английское. Список возможных значений возвращает метод EnumValues (‘referenceData’, ‘SecTypeNameEng_NRD’).",
        "type": "string"
      },
      "secformnamerus_nrd": {
        "description": "Наименование формы выпуска (русс). Список возможных значений возвращает метод EnumValues (‘referenceData’, ‘SecFormNameRus_NRD’).",
        "type": "string"
      },
      "secformnameeng_nrd": {
        "description": "Наименование формы выпуска (англ). Список возможных значений возвращает метод EnumValues (‘referenceData’, ‘SecFormNameEng_NRD’).",
        "type": "string"
      },
      "sectypenamebr_nrd": {
        "description": "Наименование типа ц.б. по классификации Банка России. Список возможных значений возвращает метод EnumValues (‘referenceData’, ‘SecTypeNameBR_NRD’).",
        "type": "string"
      },
      "secstaterus_nrd": {
        "description": "Наименование состояния бумаги/ выпуска/транша, русское. Список возможных значений возвращает метод EnumValues (‘referenceData’, ‘SecStateRus_NRD’).",
        "type": "string"
      },
      "secstateeng_nrd": {
        "description": "Наименование состояния бумаги/ выпуска/транша, англ. Список возможных значений возвращает метод EnumValues (‘referenceData’, ‘SecStateEng_NRD’).",
        "type": "string"
      },
      "placementtype_nrd": {
        "description": "Наименование способа размещения ценных бумаг. Список возможных значений возвращает метод EnumValues (‘referenceData’, ‘PlacementType_NRD’).",
        "type": "string"
      },
      "share_category_name_nrd": {
        "description": "Наименование категории, русское. Список возможных значений возвращает метод EnumValues(‘referenceData’, ‘Share_Category_Name_NRD’).",
        "type": "string"
      },
      "share_category_name_en_nrd": {
        "description": "Наименование категории, английское. Список возможных значений возвращает метод EnumValues(‘referenceData’, ‘Share_Category_Name_En_NRD’).",
        "type": "string"
      },
      "dr_category_name_nrd": {
        "description": "Полное наименование категории депозитарных расписок (рус.)",
        "type": "string"
      },
      "dr_category_name_en_nrd": {
        "description": "Полное наименование категории депозитарных расписок (англ.)",
        "type": "string"
      },
      "company_state_name_nrd": {
        "description": "Наименование состояния организации",
        "type": "string"
      },
      "rate_type_id": {
        "format": "int64",
        "description": "Идентификатор вида купона (процента)",
        "type": "integer"
      },
      "cp_type_id": {
        "format": "int64",
        "description": "Периодичность выплаты купона",
        "type": "integer"
      },
      "coupon_period_base_id": {
        "format": "int64",
        "description": "Метод исчисления купонного дохода",
        "type": "integer"
      },
      "sec_type_id": {
        "format": "int64",
        "description": "Идентификатор типа ценной бумаги",
        "type": "integer"
      },
      "sec_form_id": {
        "format": "int64",
        "description": "",
        "type": "integer"
      },
      "sec_type_br_code": {
        "description": "Тип ц.б. по классификации Банка России. Список возможных значений возвращает метод EnumValues (‘referenceData’, ‘Sec_Type_BR_Code’).",
        "type": "string"
      },
      "sec_state_id": {
        "format": "int64",
        "description": "Состояние выпуска",
        "type": "integer"
      },
      "placement_type_id": {
        "format": "int64",
        "description": "Способ размещения",
        "type": "integer"
      },
      "share_category_id": {
        "format": "int64",
        "description": "Категория акций",
        "type": "integer"
      },
      "dr_category_mn": {
        "description": "Мнемокод категории депозитарных расписок",
        "type": "string"
      },
      "company_state_mn": {
        "description": "Мнемокод состояния организации",
        "type": "string"
      },
      "sector4212u": {
        "description": "Сектор экономики по классификатору ЦБ РФ",
        "type": "string"
      },
      "sna2008": {
        "description": "Система национальных счетов 2008",
        "type": "string"
      },
      "fintoolid": {
        "format": "int64,key",
        "description": "Идентификатор финансового инструмента в базе Интерфакс",
        "type": "integer"
      },
      "fullname": {
        "description": "Полное название финансового инструмента",
        "type": "string"
      },
      "isin144a": {
        "description": "Дополнительный ISIN-код выпуска облигаций",
        "type": "string"
      },
      "isincode": {
        "description": "ISIN-код финансового инструмента",
        "type": "string"
      },
      "nickname": {
        "description": "Краткое наименование финансового инструмента",
        "type": "string"
      },
      "progfintoolid": {
        "format": "int32",
        "description": "Связь между УИН выпуска облигаций и УИН программы облигаций",
        "type": "integer"
      },
      "regcode": {
        "description": "Регистрационный номер финансового инструмента",
        "type": "string"
      },
      "regdate": {
        "format": "date-time",
        "description": "Дата государственной регистрации выпуска",
        "type": "string"
      },
      "regorg": {
        "description": "Регистрирующий орган",
        "type": "string"
      },
      "amortisedmty": {
        "format": "int32",
        "description": "Признак наличия амортизационного погашения по выпуску (1 - да)",
        "type": "integer"
      },
      "basis": {
        "description": "Базис НКД по базе Интерфакс. Список возможных значений возвращает метод EnumValues(‘referenceData’, ‘Basis’).",
        "type": "string"
      },
      "bondstructuralpar": {
        "description": "Структурный параметр облигации",
        "type": "string"
      },
      "cfi": {
        "description": "Код типа инструмента",
        "type": "string"
      },
      "coupontype": {
        "description": "Вид купона. Список возможных значений возвращает метод EnumValues(‘referenceData’, ‘CouponType’).",
        "type": "string"
      },
      "fintooltype": {
        "description": "Тип финансового инструмента (наименование). Список возможных значений возвращает метод EnumValues(‘referenceData’, ‘fintooltype’). См.также Приложение 2.",
        "type": "string"
      },
      "guaranteeamount": {
        "description": "Полнота гарантии",
        "type": "string"
      },
      "guaranteetype": {
        "description": "Вид гарантии. Список возможных значений возвращает метод EnumValues(‘referenceData’, ‘GuaranteeType’).",
        "type": "string"
      },
      "haveoffer": {
        "format": "int32",
        "description": "Признак наличия по выпуску возможности досрочного выкупа или погашения (1 - да)",
        "type": "integer"
      },
      "isconvertible": {
        "format": "int32",
        "description": "Наличие возможности конвертации / осуществленная конвертация в другой инструмент (1 - да)",
        "type": "integer"
      },
      "isguaranteed": {
        "format": "int32",
        "description": "Признак наличия по выпуску гарантии (1 - да)",
        "type": "integer"
      },
      "maturitygroup": {
        "description": "Группа по периоду обращения. Список возможных значений возвращает метод EnumValues (‘referenceData’, ‘MaturityGroup’).",
        "type": "string"
      },
      "securitization": {
        "description": "Секьюритизация",
        "type": "string"
      },
      "accruedintcalctype": {
        "format": "int32",
        "description": "Признак, определяющий правила расчета НКД. Список возможных значений возвращает метод EnumValues(‘referenceData’, ‘AccruedintCalcType’).",
        "type": "integer"
      },
      "country": {
        "description": "Двухбуквенный код страны в соответствии с ОКСМ.Список возможных значений возвращает метод /Info/EnumValues(‘referenceData’, ‘Country’).",
        "type": "string"
      },
      "couponperyear": {
        "format": "int32",
        "description": "Количество купонов в год",
        "type": "integer"
      },
      "faceftname": {
        "description": "Валюта номинала финансового инструмента.Список возможных значений возвращает метод /Info/EnumValues (‘referenceData’, ‘FaceFTName’).",
        "type": "string"
      },
      "facevalue": {
        "format": "decimal(38,20)",
        "description": "Номинал финансового инструмента",
        "type": "number"
      },
      "guarantval": {
        "format": "decimal(24,8)",
        "description": "Гарантированная сумма",
        "type": "number"
      },
      "havedefault": {
        "format": "int32",
        "description": "Признак наличия дефолта по выпуску (1 - да)",
        "type": "integer"
      },
      "numcoupons": {
        "format": "int32",
        "description": "Количество купонов всего",
        "type": "integer"
      },
      "status": {
        "description": "Состояние выпуска финансового инструмента. Список возможных значений возвращает метод EnumValues(‘referenceData’, ‘Status’).",
        "type": "string"
      },
      "sumissueval": {
        "format": "decimal(24,8)",
        "description": "Заявленный объем эмиссии в валюте номинала",
        "type": "number"
      },
      "sumissuevol": {
        "format": "decimal(34,8)",
        "description": "Заявленный объем эмиссии в штуках",
        "type": "number"
      },
      "summarketval": {
        "format": "decimal(34,8)",
        "description": "Объем в обращении в валюте номинала",
        "type": "number"
      },
      "summarketvol": {
        "format": "decimal(34,8)",
        "description": "Объем в обращении в штуках",
        "type": "number"
      },
      "borrowername": {
        "description": "Название реального заемщика (эмитента) облигаций",
        "type": "string"
      },
      "borrowerokpo": {
        "description": "ОКПО реального заемщика (эмитента) облигаций",
        "type": "string"
      },
      "borrowersector": {
        "description": "Сектор реального заемщика. Список возможных значений возвращает метод EnumValues(‘referenceData’, ‘BorrowerSector’).",
        "type": "string"
      },
      "borroweruid": {
        "format": "int64",
        "description": "УИН реального заемщика (эмитента) в БД Интерфакс (fininstid)",
        "type": "integer"
      },
      "borrowerinn": {
        "description": "ИНН / TIN реального заемщика(эмитента) облигаций; для депо-расписок ИНН / TIN эмитента представляемой(базовой) ценной бумаги",
        "type": "string"
      },
      "borrowercountry": {
        "type": "string"
      },
      "borrowerregionname": {
        "type": "string"
      },
      "issuername": {
        "description": "Название оператора выпуска финансового инструмента",
        "type": "string"
      },
      "issuerokpo": {
        "description": "ОКПО оператора выпуска финансового инструмента",
        "type": "string"
      },
      "issuersector": {
        "description": "Сектор эмитента. Список возможных значений возвращает метод EnumValues(‘referenceData’, ‘IssuerSector’).",
        "type": "string"
      },
      "issueruid": {
        "format": "int64",
        "description": "УИН оператора в БД Интерфакс (fininstid)",
        "type": "integer"
      },
      "issuerinn": {
        "description": "ИНН / TIN оператора выпуска финансового инструмента",
        "type": "string"
      },
      "issuercountry": {
        "type": "string"
      },
      "issuerregionname": {
        "type": "string"
      },
      "assetssector": {
        "description": "Отрасль актива. Список возможных значений возвращает метод EnumValues(‘referenceData’, ‘AssetsSector’).",
        "type": "string"
      },
      "numguarantors": {
        "format": "int32",
        "description": "Количество гарантов/поручителей",
        "type": "integer"
      },
      "begdistdate": {
        "format": "date-time",
        "description": "Дата начала размещения",
        "type": "string"
      },
      "begmtydate": {
        "format": "date-time",
        "description": "Дата начала погашения",
        "type": "string"
      },
      "daysall": {
        "format": "int32",
        "description": "Количество дней с даты начала размещения до даты окончания погашения облигации",
        "type": "integer"
      },
      "enddistdate": {
        "format": "date-time",
        "description": "Дата окончания размещения",
        "type": "string"
      },
      "endmtydate": {
        "format": "date-time",
        "description": "Дата погашения финансового инструмента",
        "type": "string"
      },
      "privatedist": {
        "format": "int32",
        "description": "Признак размещения по открытой/закрытой подписке",
        "type": "integer"
      },
      "regdistdate": {
        "format": "date-time",
        "description": "Дата регистрации отчета о выпуске финансового инструмента / дата отсылки уведомления",
        "type": "string"
      },
      "securitytype": {
        "description": "Тип выпуска/расписки/фонда. Список возможных значений возвращает метод EnumValues(‘referenceData’, ‘SecurityType’).",
        "type": "string"
      },
      "securitykind": {
        "description": "Вид выпуска/спонсируемость/тип инвестиций. Список возможных значений возвращает метод EnumValues (‘referenceData’, ‘SecurityKind’).",
        "type": "string"
      },
      "nominaltype": {
        "type": "string"
      },
      "update_time": {
        "format": "date-time",
        "description": "Дата последнего обновления данных по бумаге",
        "type": "string"
      },
      "isregion": {
        "format": "int32",
        "description": "Выпуск субъекта федерации:\r\n0 – муниципальный выпуск\r\n1 – выпуск субъекта федерации\r\nпусто – другое",
        "type": "integer"
      },
      "nsd_service": {
        "description": "Обслуживание в НРД. («На обслуживании» и т.п.). Список возможных значений возвращает метод EnumValues(‘referenceData’, ‘nsd_service’).",
        "type": "string"
      },
      "raterevisionsperyear": {
        "format": "int32",
        "description": "Частота пересмотра плавающей ставки купона(кол-во раз в год)",
        "type": "integer"
      },
      "floatratename": {
        "description": "Определение плавающей процентной ставки по купону",
        "type": "string"
      },
      "issubordinated": {
        "format": "int32",
        "description": "Признак субординированных облигаций(1-да)",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Info.FintoolReferenceDataRequest": {
    "type": "object",
    "properties": {
      "id": {
        "description": "Идентификатор инструмента (либо ISIN, либо регистрационный номер)",
        "type": "string"
      },
      "fields": {
        "description": "Список возвращаемых полей (необязательный, если не задан, то возвращаются все поля).",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "filter": {
        "description": "Строка фильтрации (необязательный).",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      },
      "pager": {
        "$ref": "Requests.V2.Info.Pager",
        "description": ""
      }
    }
  },
  "Requests.V2.Info.Pager": {
    "type": "object",
    "properties": {
      "page": {
        "format": "int32",
        "type": "integer"
      },
      "size": {
        "format": "int32",
        "type": "integer"
      },
      "sort": {
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Requests.V2.Info.Sort"
        }
      }
    }
  },
  "Requests.V2.Info.Sort": {
    "type": "object",
    "properties": {
      "field": {
        "type": "string"
      },
      "ascending": {
        "type": "boolean"
      }
    }
  },
  "Requests.V2.Info.IFXFintoolRefDataRequest": {
    "type": "object",
    "properties": {
      "id": {
        "description": "Идентификатор инструмента (либо ISIN, либо регистрационный номер)",
        "type": "string"
      },
      "fields": {
        "description": "Список возвращаемых полей (необязательный, если не задан, то возвращаются все поля).",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "filter": {
        "description": "Строка фильтрации (необязательный).",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      },
      "pager": {
        "$ref": "Requests.V2.Info.Pager",
        "description": ""
      }
    }
  },
  "Info.IFXFintoolRefDataFields": {
    "type": "object",
    "properties": {
      "fintoolid": {
        "format": "int64,key",
        "description": "Идентификатор финансового инструмента в базе Интерфакс",
        "type": "integer"
      },
      "fullname": {
        "description": "Полное название финансового инструмента",
        "type": "string"
      },
      "isin144a": {
        "description": "Дополнительный ISIN-код выпуска облигаций",
        "type": "string"
      },
      "isincode": {
        "description": "ISIN-код финансового инструмента",
        "type": "string"
      },
      "nickname": {
        "description": "Краткое наименование финансового инструмента",
        "type": "string"
      },
      "progfintoolid": {
        "format": "int32",
        "description": "Связь между УИН выпуска облигаций и УИН программы облигаций",
        "type": "integer"
      },
      "regcode": {
        "description": "Регистрационный номер финансового инструмента",
        "type": "string"
      },
      "regdate": {
        "format": "date-time",
        "description": "Дата государственной регистрации выпуска",
        "type": "string"
      },
      "regorg": {
        "description": "Регистрирующий орган",
        "type": "string"
      },
      "amortisedmty": {
        "format": "int32",
        "description": "Признак наличия амортизационного погашения по выпуску (1 - да)",
        "type": "integer"
      },
      "basis": {
        "description": "Базис НКД по базе Интерфакс. Список возможных значений возвращает метод EnumValues(‘referenceData’, ‘Basis’).",
        "type": "string"
      },
      "bondstructuralpar": {
        "description": "Структурный параметр облигации",
        "type": "string"
      },
      "cfi": {
        "description": "Код типа инструмента",
        "type": "string"
      },
      "coupontype": {
        "description": "Вид купона. Список возможных значений возвращает метод EnumValues(‘referenceData’, ‘CouponType’).",
        "type": "string"
      },
      "fintooltype": {
        "description": "Тип финансового инструмента (наименование). Список возможных значений возвращает метод EnumValues(‘referenceData’, ‘fintooltype’). См.также Приложение 2.",
        "type": "string"
      },
      "guaranteeamount": {
        "description": "Полнота гарантии",
        "type": "string"
      },
      "guaranteetype": {
        "description": "Вид гарантии. Список возможных значений возвращает метод EnumValues(‘referenceData’, ‘GuaranteeType’).",
        "type": "string"
      },
      "haveoffer": {
        "format": "int32",
        "description": "Признак наличия по выпуску возможности досрочного выкупа или погашения (1 - да)",
        "type": "integer"
      },
      "isconvertible": {
        "format": "int32",
        "description": "Наличие возможности конвертации / осуществленная конвертация в другой инструмент (1 - да)",
        "type": "integer"
      },
      "isguaranteed": {
        "format": "int32",
        "description": "Признак наличия по выпуску гарантии (1 - да)",
        "type": "integer"
      },
      "maturitygroup": {
        "description": "Группа по периоду обращения. Список возможных значений возвращает метод EnumValues (‘referenceData’, ‘MaturityGroup’).",
        "type": "string"
      },
      "securitization": {
        "description": "Секьюритизация",
        "type": "string"
      },
      "accruedintcalctype": {
        "format": "int32",
        "description": "Признак, определяющий правила расчета НКД. Список возможных значений возвращает метод EnumValues(‘referenceData’, ‘AccruedintCalcType’).",
        "type": "integer"
      },
      "country": {
        "description": "Двухбуквенный код страны в соответствии с ОКСМ.Список возможных значений возвращает метод /Info/EnumValues(‘referenceData’, ‘Country’).",
        "type": "string"
      },
      "couponperyear": {
        "format": "int32",
        "description": "Количество купонов в год",
        "type": "integer"
      },
      "faceftname": {
        "description": "Валюта номинала финансового инструмента.Список возможных значений возвращает метод /Info/EnumValues (‘referenceData’, ‘FaceFTName’).",
        "type": "string"
      },
      "facevalue": {
        "format": "decimal(38,20)",
        "description": "Номинал финансового инструмента",
        "type": "number"
      },
      "guarantval": {
        "format": "decimal(24,8)",
        "description": "Гарантированная сумма",
        "type": "number"
      },
      "havedefault": {
        "format": "int32",
        "description": "Признак наличия дефолта по выпуску (1 - да)",
        "type": "integer"
      },
      "numcoupons": {
        "format": "int32",
        "description": "Количество купонов всего",
        "type": "integer"
      },
      "status": {
        "description": "Состояние выпуска финансового инструмента. Список возможных значений возвращает метод EnumValues(‘referenceData’, ‘Status’).",
        "type": "string"
      },
      "sumissueval": {
        "format": "decimal(24,8)",
        "description": "Заявленный объем эмиссии в валюте номинала",
        "type": "number"
      },
      "sumissuevol": {
        "format": "decimal(34,8)",
        "description": "Заявленный объем эмиссии в штуках",
        "type": "number"
      },
      "summarketval": {
        "format": "decimal(34,8)",
        "description": "Объем в обращении в валюте номинала",
        "type": "number"
      },
      "summarketvol": {
        "format": "decimal(34,8)",
        "description": "Объем в обращении в штуках",
        "type": "number"
      },
      "borrowername": {
        "description": "Название реального заемщика (эмитента) облигаций",
        "type": "string"
      },
      "borrowerokpo": {
        "description": "ОКПО реального заемщика (эмитента) облигаций",
        "type": "string"
      },
      "borrowersector": {
        "description": "Сектор реального заемщика. Список возможных значений возвращает метод EnumValues(‘referenceData’, ‘BorrowerSector’).",
        "type": "string"
      },
      "borroweruid": {
        "format": "int64",
        "description": "УИН реального заемщика (эмитента) в БД Интерфакс (fininstid)",
        "type": "integer"
      },
      "borrowerinn": {
        "description": "ИНН / TIN реального заемщика(эмитента) облигаций; для депо-расписок ИНН / TIN эмитента представляемой(базовой) ценной бумаги",
        "type": "string"
      },
      "borrowercountry": {
        "type": "string"
      },
      "borrowerregionname": {
        "type": "string"
      },
      "issuername": {
        "description": "Название оператора выпуска финансового инструмента",
        "type": "string"
      },
      "issuerokpo": {
        "description": "ОКПО оператора выпуска финансового инструмента",
        "type": "string"
      },
      "issuersector": {
        "description": "Сектор эмитента. Список возможных значений возвращает метод EnumValues(‘referenceData’, ‘IssuerSector’).",
        "type": "string"
      },
      "issueruid": {
        "format": "int64",
        "description": "УИН оператора в БД Интерфакс (fininstid)",
        "type": "integer"
      },
      "issuerinn": {
        "description": "ИНН / TIN оператора выпуска финансового инструмента",
        "type": "string"
      },
      "issuercountry": {
        "type": "string"
      },
      "issuerregionname": {
        "type": "string"
      },
      "assetssector": {
        "description": "Отрасль актива. Список возможных значений возвращает метод EnumValues(‘referenceData’, ‘AssetsSector’).",
        "type": "string"
      },
      "numguarantors": {
        "format": "int32",
        "description": "Количество гарантов/поручителей",
        "type": "integer"
      },
      "begdistdate": {
        "format": "date-time",
        "description": "Дата начала размещения",
        "type": "string"
      },
      "begmtydate": {
        "format": "date-time",
        "description": "Дата начала погашения",
        "type": "string"
      },
      "daysall": {
        "format": "int32",
        "description": "Количество дней с даты начала размещения до даты окончания погашения облигации",
        "type": "integer"
      },
      "enddistdate": {
        "format": "date-time",
        "description": "Дата окончания размещения",
        "type": "string"
      },
      "endmtydate": {
        "format": "date-time",
        "description": "Дата погашения финансового инструмента",
        "type": "string"
      },
      "privatedist": {
        "format": "int32",
        "description": "Признак размещения по открытой/закрытой подписке",
        "type": "integer"
      },
      "regdistdate": {
        "format": "date-time",
        "description": "Дата регистрации отчета о выпуске финансового инструмента / дата отсылки уведомления",
        "type": "string"
      },
      "securitytype": {
        "description": "Тип выпуска/расписки/фонда. Список возможных значений возвращает метод EnumValues(‘referenceData’, ‘SecurityType’).",
        "type": "string"
      },
      "securitykind": {
        "description": "Вид выпуска/спонсируемость/тип инвестиций. Список возможных значений возвращает метод EnumValues (‘referenceData’, ‘SecurityKind’).",
        "type": "string"
      },
      "nominaltype": {
        "type": "string"
      },
      "update_time": {
        "format": "date-time",
        "description": "Дата последнего обновления данных по бумаге",
        "type": "string"
      },
      "isregion": {
        "format": "int32",
        "description": "Выпуск субъекта федерации:\r\n0 – муниципальный выпуск\r\n1 – выпуск субъекта федерации\r\nпусто – другое",
        "type": "integer"
      },
      "nsd_service": {
        "description": "Обслуживание в НРД. («На обслуживании» и т.п.). Список возможных значений возвращает метод EnumValues(‘referenceData’, ‘nsd_service’).",
        "type": "string"
      },
      "raterevisionsperyear": {
        "format": "int32",
        "description": "Частота пересмотра плавающей ставки купона(кол-во раз в год)",
        "type": "integer"
      },
      "floatratename": {
        "description": "Определение плавающей процентной ставки по купону",
        "type": "string"
      },
      "issubordinated": {
        "format": "int32",
        "description": "Признак субординированных облигаций(1-да)",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Info.InstrumentsRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      },
      "parameters": {
        "description": "",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    }
  },
  "Info.InstrumentsFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int64,key",
        "description": "Идентификатор инструмента",
        "type": "integer"
      },
      "fintoolId": {
        "format": "int64",
        "description": "FintoolId",
        "type": "integer"
      },
      "name": {
        "description": "Наименование в ЭФиРе",
        "type": "string"
      },
      "shortname_rus": {
        "description": "Наименование поля (рус.)",
        "type": "string"
      },
      "secname": {
        "description": "Наименование поля (англ.)",
        "type": "string"
      },
      "isin": {
        "description": "ISIN",
        "type": "string"
      },
      "cfi_ifx": {
        "description": "Код типа инструмента по классификатору Интерфакс",
        "type": "string"
      },
      "exch": {
        "format": "int32",
        "description": "Идентификатор биржи",
        "type": "integer"
      },
      "seccode": {
        "description": "Торговый код",
        "type": "string"
      },
      "symbol_ts": {
        "description": "Торговое наименование на бирже",
        "type": "string"
      },
      "code_issuer": {
        "description": "Символьный код эмитента",
        "type": "string"
      },
      "lotsize": {
        "format": "int64",
        "description": "Размер лота",
        "type": "integer"
      },
      "status": {
        "format": "int32",
        "description": "Торговый статус инструмента",
        "type": "integer"
      },
      "issuer": {
        "description": "Наименование эмитента",
        "type": "string"
      },
      "sector": {
        "description": "Отрасль эмитента",
        "type": "string"
      },
      "currency": {
        "description": "Валюта торгов",
        "type": "string"
      },
      "reg_num": {
        "description": "Регистрационный номер инструмента",
        "type": "string"
      },
      "mat_date": {
        "format": "date-time",
        "description": "Дата погашения/экспирации",
        "type": "string"
      },
      "cfi_name": {
        "description": "Наименование типа инструмента",
        "type": "string"
      },
      "exchange": {
        "description": "Биржа/рынок",
        "type": "string"
      },
      "visible": {
        "description": "Статус («Видимый», «Архивный»)",
        "type": "string"
      },
      "tool_type": {
        "description": "Код типа инструмента",
        "type": "string"
      },
      "tool_name": {
        "description": "Наименование типа инструмента",
        "type": "string"
      },
      "is_main": {
        "description": "Основной торговый (или торгуемый) инструмент",
        "type": "boolean"
      },
      "reg_code": {
        "description": "Гос. рег. номер",
        "type": "string"
      },
      "reg_code_norm": {
        "description": "Гос. рег. номер нормализованное значение",
        "type": "string"
      },
      "nrd_code": {
        "description": "Рег. номер НРД",
        "type": "string"
      },
      "nrd_code_norm": {
        "description": "Рег. номер НРД нормализованное значение",
        "type": "string"
      },
      "isin2": {
        "description": "Альтернативный isin",
        "type": "string"
      },
      "isin2_norm": {
        "description": "Альтернативный isin нормализованное значение",
        "type": "string"
      },
      "isin_norm": {
        "description": "ISIN нормализованное значение",
        "type": "string"
      },
      "trade_site": {
        "description": "Торговая площадка",
        "type": "string"
      },
      "board": {
        "description": "Режим торгов",
        "type": "string"
      },
      "update_date": {
        "format": "date-time",
        "description": "Дата обновления",
        "type": "string"
      }
    }
  },
  "Requests.V2.Info.ListOrgRolesRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный).",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Info.ListOrgRolesFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int64,key",
        "description": "Идентификатор роли",
        "type": "integer"
      },
      "shortname_rus": {
        "description": "Краткое наименование роли",
        "type": "string"
      },
      "fullname_rus": {
        "description": "Полное описание роли",
        "type": "string"
      },
      "code": {
        "description": "Символьный идентификатор роли",
        "type": "string"
      },
      "shortname_eng": {
        "description": "Краткое английское наименование роли",
        "type": "string"
      },
      "fullname_eng": {
        "description": "Полное английское наименование роли",
        "type": "string"
      },
      "sort_order": {
        "format": "int32",
        "description": "Порядковый номер в иерархии",
        "type": "integer"
      },
      "bond": {
        "format": "int32",
        "description": "Облигации",
        "type": "integer"
      },
      "shar": {
        "format": "int32",
        "description": "Акции",
        "type": "integer"
      },
      "depo": {
        "format": "int32",
        "description": "Депо-расписки",
        "type": "integer"
      },
      "fund": {
        "format": "int32",
        "description": "Фонды",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Info.MoneyFlowRequest": {
    "required": [
      "id",
      "date1",
      "date2"
    ],
    "type": "object",
    "properties": {
      "id": {
        "description": "Идентификатор инструмента. ISIN, RegCode, NRDCode, FintoolId.",
        "type": "string"
      },
      "date1": {
        "format": "date-time",
        "description": "Дата начала интервала времени.",
        "type": "string"
      },
      "date2": {
        "format": "date-time",
        "description": "Дата окончания интервала времени.",
        "type": "string"
      },
      "useOffer": {
        "description": "1 – исходя из продажи облигации в ближайшую оферту",
        "type": "boolean"
      },
      "useForecast": {
        "description": "1 – исходя из предполагаемых дивидендов",
        "type": "boolean"
      },
      "couponForecasts": {
        "description": "Пользовательские данные для описания неизвестных купонов.",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Requests.V2.Info.MoneyFlowRequestForecast"
        }
      }
    }
  },
  "Requests.V2.Info.MoneyFlowRequestForecast": {
    "type": "object",
    "properties": {
      "couponForecast": {
        "format": "double",
        "description": "Значение доходности для купона",
        "type": "number"
      },
      "couponId": {
        "format": "int32",
        "description": "Порядкоовый номер купона, если не задается поле CouponDate",
        "type": "integer"
      },
      "couponDate": {
        "format": "date-time",
        "description": "Даты купона",
        "type": "string"
      }
    }
  },
  "Info.MoneyFlowResponse": {
    "type": "object",
    "properties": {
      "fintoolId": {
        "format": "int64",
        "type": "integer"
      },
      "fintoolType": {
        "type": "string"
      },
      "moneyFlow": {
        "format": "decimal(38,4)",
        "type": "number"
      },
      "error": {
        "type": "string"
      }
    }
  },
  "Requests.V2.Info.OrganizersRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный). Для получения организаторов конкретного выпуска необходимо использовать фильтр по id_fintool.",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Максимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Info.OrganizersFields": {
    "type": "object",
    "properties": {
      "fintoolid": {
        "format": "int64,key",
        "description": "Идентификатор инструмента",
        "type": "integer"
      },
      "fininstid": {
        "format": "int64,key",
        "description": "Идентификатор организации",
        "type": "integer"
      },
      "id_org_role": {
        "format": "int64,key",
        "description": "Идентификатор роли организации, применительно к данному инструменту (см. метод ListOrgRoles)",
        "type": "integer"
      },
      "fullname": {
        "description": "Полное наименование",
        "type": "string"
      }
    }
  },
  "Requests.V2.Info.OrganizersByFininstIdRequest": {
    "required": [
      "fininstIds"
    ],
    "type": "object",
    "properties": {
      "fininstIds": {
        "description": "Массив запрашиваемых FininstId, не более 50",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "format": "int64",
          "type": "integer"
        }
      }
    }
  },
  "Requests.V2.Info.OrganizersByFintoolIdRequest": {
    "required": [
      "fintoolIds"
    ],
    "type": "object",
    "properties": {
      "fintoolIds": {
        "description": "Массив запрашиваемых FintoolId, не более 100",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "format": "int64",
          "type": "integer"
        }
      }
    }
  },
  "Requests.V2.Info.ProfParticipantsRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Info.ProfParticipantsFields": {
    "type": "object",
    "properties": {
      "companyid": {
        "description": "Идентификатор компании в ЦБ",
        "type": "string"
      },
      "sampletime": {
        "format": "date-time",
        "description": "Дата изменения данных на сайте ЦБ",
        "type": "string"
      },
      "fininstid": {
        "format": "int64,key",
        "description": "Идентификатор эмитента в базе Интерфакс",
        "type": "integer"
      },
      "typecompanyid": {
        "format": "int64",
        "description": "Идентификатор типа профучастника",
        "type": "integer"
      },
      "shortname_rus": {
        "description": "Краткое наименование профучастника в даных ЦБ",
        "type": "string"
      },
      "fullname_rus": {
        "description": "Полное наименование профучастника в даных ЦБ",
        "type": "string"
      },
      "inn": {
        "description": "ИНН",
        "type": "string"
      },
      "ogrn": {
        "description": "ОГРН",
        "type": "string"
      },
      "reg_number": {
        "description": "Регистрационный номер по данным ЦБ (для страховых компаний, СРО, КРА)",
        "type": "string"
      },
      "reestr_date": {
        "format": "date-time",
        "description": "Дата включения в реестр",
        "type": "string"
      },
      "address": {
        "description": "Адрес местонахождения",
        "type": "string"
      },
      "phone": {
        "description": "Телефоны",
        "type": "string"
      },
      "license": {
        "description": "Лицензии(в текстовой форме)",
        "type": "string"
      },
      "www": {
        "description": "Веб-сайты",
        "type": "string"
      },
      "e_mail": {
        "description": "Адреса электронной почты",
        "type": "string"
      },
      "delete_date": {
        "format": "date-time",
        "description": "Дата удаления записи из данных ЦБ",
        "type": "string"
      },
      "typecompany_name": {
        "type": "string"
      }
    }
  },
  "Requests.V2.Info.ResidualFaceValueRequest": {
    "required": [
      "id",
      "date"
    ],
    "type": "object",
    "properties": {
      "id": {
        "description": "ISIN, либо регистрационный номер, либо торговый код (обязательный).",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата определения остаточного номинала.",
        "type": "string"
      },
      "isCloseRegister": {
        "description": "",
        "type": "boolean"
      },
      "isPercent": {
        "description": "0 – в валюте номинала\r\n1 – в процентах от номинала",
        "type": "boolean"
      }
    }
  },
  "Requests.V2.Info.SecuritiesRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Info.SecuritiesFields": {
    "type": "object",
    "properties": {
      "id_fintool": {
        "format": "int64",
        "description": "Идентификатор инструмента, старое имя, рекомендуется использовать fintoolid.",
        "type": "integer"
      },
      "quatro_id": {
        "description": "Идентификатор инструмента в системе Quatro",
        "type": "string"
      },
      "shortname_rus": {
        "description": "Краткое наименование инструмента",
        "type": "string"
      },
      "fullname_rus": {
        "description": "Полное наименование инструмента",
        "type": "string"
      },
      "isin": {
        "description": "Код ISIN",
        "type": "string"
      },
      "cfi": {
        "description": "Код CFI",
        "type": "string"
      },
      "reg_code": {
        "description": "Регистрационный номер инструмента",
        "type": "string"
      },
      "on_quatro": {
        "format": "int32",
        "description": "Торгуется ли в системе Quatro (0/1)",
        "type": "integer"
      },
      "facevalue": {
        "format": "decimal(38,127)",
        "description": "Номинал",
        "type": "number"
      },
      "facevalue_currency": {
        "description": "Валюта номинала",
        "type": "string"
      },
      "issue_vol": {
        "format": "int64",
        "description": "Объем выпуска (в штуках)",
        "type": "integer"
      },
      "coupon_rate": {
        "description": "Ставка текущего купона",
        "type": "string"
      },
      "endmty_date": {
        "format": "date-time",
        "description": "Дата погашения выпуска",
        "type": "string"
      },
      "id_emitent": {
        "format": "int64",
        "description": "Идентификатор эмитента",
        "type": "integer"
      },
      "fintoolid": {
        "format": "int64,key",
        "description": "Идентификатор инструмента",
        "type": "integer"
      },
      "fininstid": {
        "format": "int64",
        "description": "Идентификатор эмитента выпуска в базе Интерфакс",
        "type": "integer"
      },
      "emitent_shortname_rus": {
        "description": "Наименование эмитента",
        "type": "string"
      },
      "okpo": {
        "description": "ОКПО эмитента",
        "type": "string"
      },
      "inn": {
        "description": "ИНН эмитента",
        "type": "string"
      },
      "ogrn": {
        "description": "ОГРН эмитента",
        "type": "string"
      },
      "sector": {
        "description": "Отрасль эмитента. Список возможных значений возвращает метод EnumValues(‘securities’, ‘sector’).",
        "type": "string"
      },
      "update_date": {
        "format": "date-time",
        "description": "Дата последних изменений информации по инструменту",
        "type": "string"
      },
      "fintooltype": {
        "description": "Тип финансового инструмента (наименование). Список возможных значений возвращает метод EnumValues(‘securities’, ‘fintooltype’).",
        "type": "string"
      },
      "securitytype": {
        "description": "Тип выпуска/расписки/фонда. Список возможных значений возвращает метод EnumValues(‘securities’, ‘SecurityType’).",
        "type": "string"
      },
      "securitykind": {
        "description": "Вид выпуска/спонсируемость/тип инвестиций. Список возможных значений возвращает метод EnumValues(‘securities’, ‘SecurityKind’).",
        "type": "string"
      },
      "status_name": {
        "description": "Наименование статуса финансового инструмента («В обращении», «Погашен» и т.п.). Список возможных значений возвращает метод EnumValues(‘securities’, ‘Status_name’).",
        "type": "string"
      },
      "coupons_per_year": {
        "format": "int32",
        "description": "Количество купонов в год",
        "type": "integer"
      },
      "borroweruid": {
        "format": "int64",
        "description": "УИН реального заемщика в БД Интерфакс(fininstid); для депо-расписок УИН эмитента представлямой(базовой) ценной бумаги",
        "type": "integer"
      },
      "borrowername": {
        "description": "Название реального заемщика облигаций; для депо-расписок название эмитента представлямой (базовой) ценной бумаги",
        "type": "string"
      },
      "borrowerinn": {
        "description": "ИНН реального заемщика облигаций; для депо-расписок ИНН эмитента представлямой(базовой) ценной бумаги",
        "type": "string"
      },
      "borrowersector": {
        "description": "Сектор реального заемщика облигаций; для депо-расписок сектор эмитента представлямой (базовой) ценной бумаги",
        "type": "string"
      },
      "nsd_service": {
        "description": "Обслуживание в НРД. («На обслуживании» и т.п.). Список возможных значений возвращает метод EnumValues(‘securities’, ‘nsd_service’)",
        "type": "string"
      },
      "nrdcode": {
        "type": "string"
      },
      "id_iss": {
        "format": "int64",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Info.ShareDividendRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный).\r\nДля получения данных по конкретному выпуску необходимо использовать фильтр по fintoolid.",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Info.ShareDividendFields": {
    "type": "object",
    "properties": {
      "decision_date": {
        "format": "date-time",
        "description": "Дата принятия решения о выплате",
        "type": "string"
      },
      "declared_pay_date": {
        "format": "date-time",
        "description": "Планируемая дата окончания выплаты",
        "type": "string"
      },
      "declared_pay_date_nominee": {
        "format": "date-time",
        "description": "Объявленная дата выплаты дивидендов номинальным держателям",
        "type": "string"
      },
      "declared_sum_divid_val": {
        "format": "int64",
        "description": "Расчетный объем выплат на выпуск, в валюте номинала",
        "type": "integer"
      },
      "dev_organ": {
        "format": "int32,key",
        "description": "Тип собрания\r\n0 - ГОСА(годовое общее собрание акционеров)\r\n1..n – ВОСА(внеочередное общее собрание акционеров). Номер присваивается по мере назначения новых собраний.",
        "type": "integer"
      },
      "fintoolid": {
        "format": "int64,key",
        "description": "Идентификатор инструмента",
        "type": "integer"
      },
      "list_date": {
        "format": "date-time",
        "description": "Дата закрытия реестра",
        "type": "string"
      },
      "list_dividend_date": {
        "format": "date-time",
        "description": "Дата определения списка получателей дивидендов",
        "type": "string"
      },
      "note": {
        "description": "Примечание",
        "type": "string"
      },
      "payed": {
        "description": "Признак окончания выплаты",
        "type": "string"
      },
      "pay_stock": {
        "format": "decimal(32,15)",
        "description": "Объем выплат на акцию, в валюте номинала",
        "type": "number"
      },
      "period_shortname": {
        "description": "Период, за который выплачены дивиденды",
        "type": "string"
      },
      "period_date": {
        "format": "date-time,key",
        "description": "Дата периода",
        "type": "string"
      },
      "protocol_date": {
        "format": "date-time",
        "description": "Дата публикации протокола акционеров",
        "type": "string"
      },
      "report_pay_date": {
        "format": "date-time",
        "description": "Дата сообщения о выплате",
        "type": "string"
      },
      "sum_divid_val": {
        "format": "decimal(20,0)",
        "description": "Реальный объем выплат на выпуск, в валюте номинала",
        "type": "number"
      },
      "update_date": {
        "format": "date-time",
        "description": "Дата/время последнего изменения записи",
        "type": "string"
      },
      "recomend_pay_1stock": {
        "format": "double",
        "description": "Рекомендация совета директоров по выплате дивидендов на одну акцию, в валюте номинала",
        "type": "number"
      },
      "recomend_date": {
        "format": "date-time",
        "description": "Дата рекомендации совета директоров по выплате дивидендов",
        "type": "string"
      },
      "recomend_list_dividend_date": {
        "format": "date-time",
        "description": "Рекомендация совета директоров по дате составления списка владельцев для выплаты дивидендов",
        "type": "string"
      },
      "recomend_pay_date": {
        "format": "date-time",
        "description": "Рекомендация совета директоров по дате выплаты дивидендов",
        "type": "string"
      },
      "recomend_pay_date_nominee": {
        "format": "date-time",
        "description": "Рекомендация совета директоров по дате выплаты дивидендов номинальным держателям",
        "type": "string"
      }
    }
  },
  "Requests.V2.Info.TypeTreeRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Info.TypeTreeFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int32,key",
        "description": "Идентификатор типа в базе Интерфакс",
        "type": "integer"
      },
      "id_parent": {
        "format": "int32",
        "description": "Идентификатор родительского типа в базе Интерфакс",
        "type": "integer"
      },
      "fullname_rus": {
        "description": "Полное наименование площадки (рус.)",
        "type": "string"
      },
      "fullname_eng": {
        "description": "Полное наименование типа (англ.)",
        "type": "string"
      },
      "shortname_rus": {
        "description": "Краткое наименование типа (рус.)",
        "type": "string"
      },
      "shortname_eng": {
        "description": "Краткое наименование типа (англ.)",
        "type": "string"
      },
      "iss_mask": {
        "description": "Маска для поиска соответствующих инструментов по значению поля CFI_IFX",
        "type": "string"
      },
      "sort_order": {
        "format": "int32",
        "description": "Порядковый номер в иерархии",
        "type": "integer"
      },
      "visible": {
        "format": "int32",
        "description": "Признак активного типа, по которой обновляются данные\r\nЕсли 1 – тип активен, 0 – выведен в архив",
        "type": "integer"
      }
    }
  },
  "Moex.BoardsResponse": {
    "type": "object",
    "properties": {
      "engines": {
        "description": "Список справочников подсистем",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Moex.Engine"
        }
      }
    }
  },
  "Moex.Engine": {
    "description": "Подсистема",
    "type": "object",
    "properties": {
      "id": {
        "format": "int32",
        "description": "Числовой идентификатор подсистемы",
        "type": "integer"
      },
      "name": {
        "description": "Символьный идентификатор подсистемы",
        "type": "string"
      },
      "title": {
        "description": "Наименование подсистемы",
        "type": "string"
      },
      "markets": {
        "description": "Список рынков",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Moex.Market"
        }
      }
    }
  },
  "Moex.Market": {
    "description": "Рынок",
    "type": "object",
    "properties": {
      "id": {
        "format": "int32",
        "description": "Числовой идентификатор рынка",
        "type": "integer"
      },
      "name": {
        "description": "Символьный идентификатор рынка",
        "type": "string"
      },
      "title": {
        "description": "Наименование рынка",
        "type": "string"
      },
      "marketplace": {
        "description": "",
        "type": "string"
      },
      "boardGroups": {
        "description": "Список групп режимов торгов",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Moex.BoardGroup"
        }
      }
    }
  },
  "Moex.BoardGroup": {
    "description": "Группа режимов торгов",
    "type": "object",
    "properties": {
      "id": {
        "format": "int32",
        "description": "Числовой идентификатор группы режимов",
        "type": "integer"
      },
      "name": {
        "description": "Символьный идентификатор группы режимов",
        "type": "string"
      },
      "title": {
        "description": "Наименование группы режимов",
        "type": "string"
      },
      "isDefault": {
        "type": "boolean"
      },
      "isTraded": {
        "type": "boolean"
      },
      "boards": {
        "description": "Список режимов торгов",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Moex.Board"
        }
      }
    }
  },
  "Moex.Board": {
    "description": "Режим торгов",
    "type": "object",
    "properties": {
      "id": {
        "format": "int32",
        "description": "Числовой идентификатор режима торгов",
        "type": "integer"
      },
      "boardId": {
        "description": "Символьный идентификатор режима торгов",
        "type": "string"
      },
      "title": {
        "description": "Наименование режима торгов",
        "type": "string"
      },
      "isTraded": {
        "type": "boolean"
      },
      "hasCandles": {
        "type": "boolean"
      },
      "isPrimary": {
        "type": "boolean"
      }
    }
  },
  "Requests.V2.Moex.FuturesRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Moex.FuturesFields": {
    "type": "object",
    "properties": {
      "id_iss": {
        "format": "int64",
        "description": "Числовой идентификатор инструмента в БД ЭФИР",
        "type": "integer"
      },
      "secid": {
        "description": "Краткий торговый код ПФИ на Мосбирже",
        "type": "string"
      },
      "boardid": {
        "description": "Идентификатор режима торгов",
        "type": "string"
      },
      "board_title": {
        "description": "Полное наименование режима торгов",
        "type": "string"
      },
      "board_group": {
        "description": "Краткое наименование группы режимов торгов Мосбиржи (англ.)",
        "type": "string"
      },
      "board_group_title": {
        "description": "Краткое наименование группы режимов торгов Мосбиржи (рус.)",
        "type": "string"
      },
      "market": {
        "description": "Краткое наименование рынка Мосбиржи (англ.)",
        "type": "string"
      },
      "engine": {
        "description": "Краткое наименование торговой системы Мосбиржи (англ.)",
        "type": "string"
      },
      "short_name": {
        "description": "Краткое русское наименование ПФИ на Мосбирже",
        "type": "string"
      },
      "isin": {
        "description": "Международный идентификационный код инструмента ISIN",
        "type": "string"
      },
      "cfi_ifx": {
        "description": "Идентификационный код типа инструмента в БД Интерфакс",
        "type": "string"
      },
      "cfi_name": {
        "description": "Расшифровка идентификационного кода типа инструмента",
        "type": "string"
      },
      "lot_size": {
        "format": "int64",
        "description": "Размер лота в штуках",
        "type": "integer"
      },
      "expiration_date": {
        "format": "date-time",
        "description": "Дата погашения ценной бумаги",
        "type": "string"
      },
      "currency": {
        "description": "Код валюты торгов",
        "type": "string"
      },
      "emitent_code": {
        "description": "Код эмитента (акции - Мосбиржа и НП РТС, остальные - Интерфакс)",
        "type": "string"
      },
      "emitent_name": {
        "description": "Наименование эмитента из БД Интерфакс",
        "type": "string"
      },
      "market_sector": {
        "description": "Сектор рынка эмитента",
        "type": "string"
      },
      "ba_id_iss": {
        "format": "int64",
        "description": "Числовой идентификатор базового актива фьючерсного контракта в БД ЭФИР",
        "type": "integer"
      },
      "ba_secid": {
        "description": "Краткий торговый код базового актива фьючерсного контракта на Мосбирже",
        "type": "string"
      },
      "ba_currency": {
        "format": "int32",
        "description": "Код валюты торгов для базового актива фьючерсного контракта",
        "type": "integer"
      },
      "ba_coeff": {
        "format": "decimal(38,127)",
        "description": "Коэффициент инструмента БА описывает количество единиц базового актива в одном фьючерсе",
        "type": "number"
      },
      "ba_min_step": {
        "format": "decimal(20,8)",
        "description": "Минимальный шаг цены в валюте торгов",
        "type": "number"
      },
      "ba_min_step_price": {
        "format": "decimal(16,8)",
        "description": "Стоимость шага цены",
        "type": "number"
      },
      "ba_lot_size": {
        "format": "int64",
        "description": "Размер лота в штуках",
        "type": "integer"
      },
      "ba_trade_currency": {
        "format": "int32",
        "description": "Код валюты торгов для базового актива фьючерсного контракта",
        "type": "integer"
      }
    }
  },
  "Moex.FuturesColumnsFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int64",
        "description": "Идентификатор поля",
        "type": "integer"
      },
      "code": {
        "description": "Кодовое наименование поля",
        "type": "string"
      },
      "short_name_rus": {
        "description": "Краткое наименование поля (рус.)",
        "type": "string"
      },
      "short_name_eng": {
        "description": "Краткое наименование поля (англ.)",
        "type": "string"
      },
      "full_name_rus": {
        "description": "Полное описание поля (рус.)",
        "type": "string"
      },
      "full_name_eng": {
        "description": "Полное описание поля (англ.)",
        "type": "string"
      },
      "sort_order": {
        "format": "int64",
        "description": "Порядковый номер в иерархии",
        "type": "integer"
      },
      "is_default": {
        "format": "int32",
        "description": "Поле присутствует в выборках по-умолчанию",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Moex.HistoryRequest": {
    "type": "object",
    "properties": {
      "engine": {
        "description": "Краткое наименование торговой системы Мосбиржи (англ.). Обязательный параметр. Подсистема MOEX: stock, state, currency и т.д.",
        "type": "string"
      },
      "market": {
        "description": "Краткое наименование рынка Мосбиржи (англ.). Обязательный параметр. Рынок MOEX: index, shares, bonds, ndm и т.д.",
        "type": "string"
      },
      "boardid": {
        "description": "Идентификатор режима торгов Необязательный параметр. Короткое имя режима торгов или группы режимов. Может быть задано нескольких элементов через запятую.",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "instruments": {
        "description": "Массив идентификаторов торгуемых инструментов. Короткие биржевые коды, которые можно получить в сервисе Securities (поле SECID). Например, SBER.",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "dateFrom": {
        "format": "date-time",
        "description": "dateFrom – Дата начала периода.",
        "type": "string"
      },
      "dateTo": {
        "format": "date-time",
        "description": "dateTo – Дата окончания периода. Может совпадать с dateFrom, если требуются данные за один день.",
        "type": "string"
      }
    }
  },
  "Moex.IHistoryFields": {
    "type": "object",
    "properties": {
      "engine": {
        "description": "Краткое наименование торговой системы",
        "type": "string"
      },
      "market": {
        "description": "Краткое наименование рынка",
        "type": "string"
      },
      "boardid": {
        "description": "Идентификатор режима торгов",
        "type": "string"
      },
      "decimals": {
        "format": "int32",
        "description": "Точность, знаков после запятой",
        "type": "integer"
      },
      "high": {
        "format": "double",
        "description": "Цена сделки максимальная",
        "type": "number"
      },
      "low": {
        "format": "double",
        "description": "Цена сделки минимальная",
        "type": "number"
      },
      "open": {
        "format": "double",
        "description": "Цена предторгового периода/Цена аукциона открытия",
        "type": "number"
      },
      "close": {
        "format": "double",
        "description": "Цена последней сделки",
        "type": "number"
      },
      "secid": {
        "description": "Идентификатор финансового инструмента",
        "type": "string"
      },
      "shortname": {
        "description": "Краткое наименование",
        "type": "string"
      },
      "tradedate": {
        "format": "date-time",
        "description": "Дата торгов",
        "type": "string"
      }
    }
  },
  "Requests.V2.Moex.HistoryColumnsRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Moex.HistoryColumnsFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int64",
        "description": "Идентификатор поля (на MOEX используется сквозная нумерация полей по всем рынкам)",
        "type": "integer"
      },
      "engine_name": {
        "description": "Подсистема MOEX: stock, state, currency и т.д.",
        "type": "string"
      },
      "market_name": {
        "description": "Рынок MOEX: index, shares, bonds, ndm и т.д.",
        "type": "string"
      },
      "column_id": {
        "format": "int64",
        "description": "Идентификатор колонки на MOEX",
        "type": "integer"
      },
      "market_id": {
        "format": "int64",
        "description": "Идентификатор рынка MOEX, для которого применима данная колонка",
        "type": "integer"
      },
      "name": {
        "description": "Код поля",
        "type": "string"
      },
      "short_title": {
        "description": "Короткое название",
        "type": "string"
      },
      "title": {
        "description": "Полное название",
        "type": "string"
      },
      "is_ordered": {
        "format": "int32",
        "description": "Флаг «заказной»",
        "type": "integer"
      },
      "is_system": {
        "format": "int32",
        "description": "Флаг «системный»",
        "type": "integer"
      },
      "is_hidden": {
        "format": "int32",
        "description": "Флаг «невидимый»",
        "type": "integer"
      },
      "trend_by": {
        "format": "int64",
        "description": "Флаг тренда (направление последней сделки)",
        "type": "integer"
      },
      "is_signed": {
        "format": "int32",
        "description": "Флаг наличия знака (отрицательных величин)",
        "type": "integer"
      },
      "has_percent": {
        "format": "int32",
        "description": "Флаг наличия знака процента",
        "type": "integer"
      },
      "data_type": {
        "description": "string, date, number и т.д.",
        "type": "string"
      },
      "decimals": {
        "format": "int64",
        "description": "Количество знаков после запятой",
        "type": "integer"
      },
      "is_linked": {
        "format": "int32",
        "type": "integer"
      },
      "sort_order": {
        "format": "int64",
        "description": "Порядок сортировки полей в пользовательском интерфейсе.По-умолчанию – NULL (тогда можно сортировать по алфавиту).",
        "type": "integer"
      },
      "is_default": {
        "format": "int32",
        "description": "Флаг поля, которое предлагается для использования в пользовательском интерфейсе по-умолчанию.",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Moex.NccMarketRiskRequest": {
    "type": "object",
    "properties": {
      "fintoolId": {
        "format": "int64",
        "description": "Необязательный параметр. Идентификатор инструмента в БД Интерфакс",
        "type": "integer"
      },
      "startDate": {
        "format": "date-time",
        "description": "Необязательный параметр. Дата начала диапазона дат",
        "type": "string"
      },
      "endDate": {
        "format": "date-time",
        "description": "Необязательный параметр. Дата окончания диапазона дат",
        "type": "string"
      },
      "pageNo": {
        "format": "int32",
        "description": "Необязательный параметр. Номер запрашиваемой страницы",
        "type": "integer"
      },
      "pageSize": {
        "format": "int32",
        "description": "Необязательный параметр. Размер страницы",
        "type": "integer"
      }
    }
  },
  "Moex.NccMarketRiskFields": {
    "type": "object",
    "properties": {
      "dt": {
        "format": "date-time",
        "description": "Дата риска",
        "type": "string"
      },
      "fintoolid": {
        "format": "int64",
        "description": "ID инструмента в базе Интерфакс",
        "type": "integer"
      },
      "range_id": {
        "format": "int32",
        "description": "Диапазон",
        "type": "integer"
      },
      "begin_range": {
        "format": "int64",
        "description": "Начало диапазона",
        "type": "integer"
      },
      "end_range": {
        "format": "int64",
        "description": "Конец диапазона",
        "type": "integer"
      },
      "risk_fall_rate": {
        "format": "decimal(10,4)",
        "description": "Ставка риска падения цены",
        "type": "number"
      },
      "risk_grow_rate": {
        "format": "decimal(10,4)",
        "description": "Ставка риска роста цены",
        "type": "number"
      },
      "lower_bound": {
        "format": "decimal(20,8)",
        "description": "Нижняя граница",
        "type": "number"
      },
      "settl_price": {
        "format": "decimal(20,8)",
        "description": "Расчетная цена",
        "type": "number"
      },
      "upper_bound": {
        "format": "decimal(20,8)",
        "description": "Верхняя  граница",
        "type": "number"
      },
      "penalty_sec": {
        "format": "decimal(10,4)",
        "description": "Штрафная ставка за перенос позиции по бумагам",
        "type": "number"
      },
      "penalty_money": {
        "format": "decimal(10,4)",
        "description": "Штрафная ставка за перенос позиции по деньгам",
        "type": "number"
      },
      "to_ensuring": {
        "description": "Прием ц/б в обеспечение",
        "type": "boolean"
      },
      "ban_short_sale": {
        "description": "Запрет коротких продаж",
        "type": "boolean"
      },
      "fix_date": {
        "format": "date-time",
        "description": "Дата и время фиксации/ изменения параметров",
        "type": "string"
      },
      "rn": {
        "format": "int64",
        "description": "Номер строки в рамках всей выборки",
        "type": "integer"
      },
      "counter": {
        "format": "int64",
        "description": "Общее количество строк в выборке",
        "type": "integer"
      }
    }
  },
  "Moex.OptionColumnsFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int64",
        "description": "Идентификатор поля",
        "type": "integer"
      },
      "code": {
        "description": "Кодовое наименование поля",
        "type": "string"
      },
      "short_name_rus": {
        "description": "Краткое наименование поля (рус.)",
        "type": "string"
      },
      "short_name_eng": {
        "description": "Краткое наименование поля (англ.)",
        "type": "string"
      },
      "full_name_rus": {
        "description": "Полное описание поля (рус.)",
        "type": "string"
      },
      "full_name_eng": {
        "description": "Полное описание поля (англ.)",
        "type": "string"
      },
      "sort_order": {
        "format": "int64",
        "description": "Порядковый номер в иерархии",
        "type": "integer"
      },
      "is_default": {
        "format": "int32",
        "description": "Поле присутствует в выборках по-умолчанию",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Moex.OptionsRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Moex.OptionsFields": {
    "type": "object",
    "properties": {
      "id_options": {
        "format": "int64",
        "description": "Идентификатор опциона в базе Интерфакс",
        "type": "integer"
      },
      "secid": {
        "description": "Торговый код на МБ",
        "type": "string"
      },
      "boardid": {
        "description": "Код режима торгов",
        "type": "string"
      },
      "board_title": {
        "description": "Наименование режима торгов",
        "type": "string"
      },
      "board_group": {
        "description": "Код группы режимов торгов",
        "type": "string"
      },
      "board_group_title": {
        "description": "Наименование группы режимов торгов",
        "type": "string"
      },
      "market": {
        "description": "Код рынка",
        "type": "string"
      },
      "engine": {
        "description": "Код торговой системы",
        "type": "string"
      },
      "underlying_symbol": {
        "description": "Код базового актива",
        "type": "string"
      },
      "full_name": {
        "description": "Полное наименование опциона",
        "type": "string"
      },
      "option_type": {
        "description": "Тип опциона (Put или Call)",
        "type": "string"
      },
      "lotsize": {
        "format": "int64",
        "description": "Размер лота",
        "type": "integer"
      },
      "currency": {
        "description": "Валюта",
        "type": "string"
      },
      "strike_price": {
        "format": "decimal(20,8)",
        "description": "Цена страйк",
        "type": "number"
      },
      "point": {
        "format": "decimal(20,8)",
        "description": "Минимальный шаг цены в валюте торгов",
        "type": "number"
      },
      "point_amount": {
        "format": "decimal(20,8)",
        "description": "Стоимость шага цены",
        "type": "number"
      },
      "start_trade": {
        "format": "date-time",
        "description": "Дата начала торгов\r\nДата окончания торгов",
        "type": "string"
      },
      "end_trade": {
        "format": "date-time",
        "description": "Дата окончания торгов",
        "type": "string"
      }
    }
  },
  "Moex.SecColumnsFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int64",
        "description": "Идентификатор поля",
        "type": "integer"
      },
      "code": {
        "description": "Кодовое наименование поля",
        "type": "string"
      },
      "short_name_rus": {
        "description": "Краткое наименование поля (рус.)",
        "type": "string"
      },
      "short_name_eng": {
        "description": "Краткое наименование поля (англ.)",
        "type": "string"
      },
      "full_name_rus": {
        "description": "Полное описание поля (рус.)",
        "type": "string"
      },
      "full_name_eng": {
        "description": "Полное описание поля (англ.)",
        "type": "string"
      },
      "sort_order": {
        "format": "int64",
        "description": "Порядковый номер в иерархии",
        "type": "integer"
      },
      "is_default": {
        "format": "int32",
        "description": "Поле присутствует в выборках по-умолчанию",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Moex.SecuritiesRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Moex.SecuritiesFields": {
    "type": "object",
    "properties": {
      "id_iss": {
        "format": "int64",
        "description": "Идентификатор торгового инструмента в базе Интерфакс",
        "type": "integer"
      },
      "secid": {
        "description": "Торговый код на МБ",
        "type": "string"
      },
      "boardid": {
        "description": "Код режима торгов",
        "type": "string"
      },
      "board_title": {
        "description": "Наименование режима торгов",
        "type": "string"
      },
      "board_group": {
        "description": "Код группы режимов торгов",
        "type": "string"
      },
      "board_group_title": {
        "description": "Наименование группы режимов торгов",
        "type": "string"
      },
      "market": {
        "description": "Код рынка",
        "type": "string"
      },
      "engine": {
        "description": "Код торговой системы",
        "type": "string"
      },
      "short_name": {
        "description": "Краткое наименование инструмента",
        "type": "string"
      },
      "isin": {
        "description": "ISIN",
        "type": "string"
      },
      "cfi_ifx": {
        "description": "Код типа инструмента по классификатору Интерфакс",
        "type": "string"
      },
      "cfi_name": {
        "description": "Наименование типа инструмента по классификатору Интерфакс",
        "type": "string"
      },
      "lot_size": {
        "format": "int64",
        "description": "Размер лота",
        "type": "integer"
      },
      "expiration_date": {
        "format": "date-time",
        "description": "Дата экспирации",
        "type": "string"
      },
      "currency": {
        "description": "Валюта",
        "type": "string"
      },
      "emitent_code": {
        "description": "Код эмитента",
        "type": "string"
      },
      "emitent_name": {
        "description": "Наименование эмитента",
        "type": "string"
      },
      "market_sector": {
        "description": "Сектор рынка",
        "type": "string"
      },
      "min_price_increment": {
        "format": "decimal(16,8)",
        "description": "Минимальный шаг цены",
        "type": "number"
      },
      "fintoolid": {
        "format": "int64",
        "description": "Идентификатор финансового инструмента в базе Интерфакс",
        "type": "integer"
      },
      "reg_code": {
        "description": "Регистрационный номер финансового инструмента",
        "type": "string"
      }
    }
  },
  "Requests.V2.Nsd.BondCouponsRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный). Для получения купонов по конкретному выпуску необходимо использовать фильтр по одному из идентификаторов (code_nsd, id_fintool).",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Nsd.NsdBondCouponsFields": {
    "type": "object",
    "properties": {
      "code_nsd": {
        "description": "Идентификатор выпуска в базе НРД",
        "type": "string"
      },
      "coupon_number": {
        "format": "int64",
        "description": "Номер купона",
        "type": "integer"
      },
      "interest_rate": {
        "format": "double",
        "description": "Купонная ставка",
        "type": "number"
      },
      "payment_currency": {
        "description": "Валюта выплаты",
        "type": "string"
      },
      "payment_date_calc": {
        "format": "date-time",
        "description": "Дата окончания купона",
        "type": "string"
      },
      "payment_date_fact": {
        "format": "date-time",
        "description": "Дата фактической выплаты",
        "type": "string"
      },
      "payment_date_plan": {
        "format": "date-time",
        "description": "Дата выплаты купона",
        "type": "string"
      },
      "payment_size": {
        "format": "double",
        "description": "Выплата на одну облигацию",
        "type": "number"
      },
      "record_date_plan": {
        "format": "date-time",
        "description": "Дата фиксации списка",
        "type": "string"
      },
      "id_fintool": {
        "format": "int64",
        "description": "Идентификатор выпуска в базе Интерфакс (синоним fintoolid)",
        "type": "integer"
      },
      "record_date_calc": {
        "format": "date-time",
        "description": "Дата фиксации расчетная",
        "type": "string"
      },
      "lock_date_calc": {
        "format": "date-time",
        "description": "Дата блокировки расчетная",
        "type": "string"
      },
      "lock_date_plan": {
        "format": "date-time",
        "description": "Дата блокировки плановая",
        "type": "string"
      },
      "unlock_date_calc": {
        "format": "date-time",
        "description": "Дата разблокировки расчетная",
        "type": "string"
      },
      "unlock_date_plan": {
        "format": "date-time",
        "description": "Дата разблокировки плановая",
        "type": "string"
      },
      "action_id": {
        "format": "int64",
        "description": "Референс КД",
        "type": "integer"
      },
      "action_status_mn": {
        "description": "Состояние КД",
        "type": "string"
      },
      "period_from_calc": {
        "format": "date-time",
        "description": "Дата начала купонного периода расчетная",
        "type": "string"
      },
      "period_to_calc": {
        "format": "date-time",
        "description": "Дата окончания купонного периода расчетная",
        "type": "string"
      },
      "period_from_plan": {
        "format": "date-time",
        "description": "Дата начала купонного периода плановая",
        "type": "string"
      },
      "period_to_plan": {
        "format": "date-time",
        "description": "Дата окончания купонного периода плановая",
        "type": "string"
      },
      "update_date": {
        "format": "date-time",
        "description": "Дата/время последнего изменения записи",
        "type": "string"
      }
    }
  },
  "Requests.V2.Nsd.BondOffersRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный). Для получения погашений по конкретному выпуску необходимо использовать фильтр по одному из идентификаторов (code_nsd, id_fintool).",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Nsd.NsdBondOffersFields": {
    "type": "object",
    "properties": {
      "code_nsd": {
        "description": "Идентификатор выпуска в базе НРД",
        "type": "string"
      },
      "payment_currency": {
        "description": "Валюта выплаты",
        "type": "string"
      },
      "payment_date_calc": {
        "format": "date-time",
        "description": "Расчетная дата погашения",
        "type": "string"
      },
      "payment_date_fact": {
        "format": "date-time",
        "description": "Дата фактической выплаты",
        "type": "string"
      },
      "payment_date_plan": {
        "format": "date-time",
        "description": "Реальная дата погашения",
        "type": "string"
      },
      "payment_size_cur": {
        "format": "double",
        "description": "Погашение на одну облигацию в валюте выплаты",
        "type": "number"
      },
      "payment_size_percent": {
        "format": "double",
        "description": "Объем выплат, проценты",
        "type": "number"
      },
      "pp_number": {
        "format": "int64",
        "description": "Номер оферты (null для окончательного погашения)",
        "type": "integer"
      },
      "record_date_plan": {
        "format": "date-time",
        "description": "Дата фиксации списка",
        "type": "string"
      },
      "id_fintool": {
        "format": "int64",
        "description": "Идентификатор выпуска в базе Интерфакс (синоним fintoolid)",
        "type": "integer"
      },
      "action_id": {
        "format": "int64",
        "description": "Референс КД",
        "type": "integer"
      },
      "action_type_code": {
        "description": "Тип погашения",
        "type": "string"
      },
      "record_date_calc": {
        "format": "date-time",
        "description": "Дата фиксации расчетная",
        "type": "string"
      },
      "lock_date_calc": {
        "format": "date-time",
        "description": "Дата блокировки расчетная",
        "type": "string"
      },
      "lock_date_plan": {
        "format": "date-time",
        "description": "Дата блокировки плановая",
        "type": "string"
      },
      "unlock_date_calc": {
        "format": "date-time",
        "description": "Дата разблокировки расчетная",
        "type": "string"
      },
      "unlock_date_plan": {
        "format": "date-time",
        "description": "Дата разблокировки плановая",
        "type": "string"
      },
      "action_status_mn": {
        "description": "Состояние КД",
        "type": "string"
      },
      "update_date": {
        "format": "date-time",
        "description": "Дата/время последнего изменения записи",
        "type": "string"
      }
    }
  },
  "Requests.V2.Nsd.CommonDataRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный). Для получения данных по конкретному выпуску необходимо использовать фильтр по одному из идентификаторов (nrdcode, fintoolid, isincode и т.п.).",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Nsd.CommonDataFields": {
    "type": "object",
    "properties": {
      "acc_open_date_nrd": {
        "format": "date-time",
        "description": "Дата первого открытия ЛС в реестре",
        "type": "string"
      },
      "base_month": {
        "description": "Базовый месяц по базе НРД",
        "type": "string"
      },
      "base_year": {
        "description": "Базовый год по базе НРД",
        "type": "string"
      },
      "basis_nrd": {
        "description": "Базис НКД по базе НРД",
        "type": "string"
      },
      "begdistdate_nrd": {
        "format": "date-time",
        "description": "Дата начала размещения",
        "type": "string"
      },
      "bondseries": {
        "description": "Номер серии",
        "type": "string"
      },
      "cfi": {
        "description": "CFI",
        "type": "string"
      },
      "cmp_code_nsd_issuer_nrd": {
        "description": "Код НРД фонда/ИСУ",
        "type": "string"
      },
      "cmp_code_nsd_managing_nrd": {
        "description": "Код НРД управляющего ипотечным покрытием",
        "type": "string"
      },
      "company_state_mn": {
        "description": "Мнемокод состояния организации (фонда)",
        "type": "string"
      },
      "company_state_name_nrd": {
        "description": "Наименование состояния организации (фонда)",
        "type": "string"
      },
      "contractdateto_nrd": {
        "format": "date-time",
        "description": "Дата окончания срока действия договора (для паевых фондов)",
        "type": "string"
      },
      "coupon_period_base_id": {
        "format": "double",
        "description": "Метод исчисления купонного дохода",
        "type": "number"
      },
      "coupontypename_nrd": {
        "description": "Наименование типа купонного периода",
        "type": "string"
      },
      "cp_type_id": {
        "format": "double",
        "description": "Периодичность  выплаты купона",
        "type": "number"
      },
      "currentfacevalue_nrd": {
        "format": "double",
        "description": "Остаточная номинальная стоимость к погашению в валюте номинала",
        "type": "number"
      },
      "daysall_nrd": {
        "format": "double",
        "description": "Количество дней в обращении",
        "type": "number"
      },
      "depositary_nrd": {
        "description": "Уполномоченный депозитарий",
        "type": "string"
      },
      "dr_category_mn": {
        "description": "Мнемокод категории депозитарных расписок",
        "type": "string"
      },
      "dr_category_name_en_nrd": {
        "description": "Полное наименование категории депозитарных расписок (англ.)",
        "type": "string"
      },
      "dr_category_name_nrd": {
        "description": "Полное наименование категории депозитарных расписок (рус.)",
        "type": "string"
      },
      "drqty": {
        "format": "double",
        "description": "Количество расписок",
        "type": "number"
      },
      "enddistdate_nrd": {
        "format": "date-time",
        "description": "Дата окончания размещения",
        "type": "string"
      },
      "endmtydate_nrd": {
        "format": "date-time",
        "description": "Дата окончания погашения",
        "type": "string"
      },
      "faceftname_nrd": {
        "description": "Валюта номинала",
        "type": "string"
      },
      "facevalue_nrd": {
        "format": "double",
        "description": "Номинал",
        "type": "number"
      },
      "facialacc_nrd": {
        "description": "Номер лицевого счета",
        "type": "string"
      },
      "fininstid": {
        "format": "int64",
        "description": "Идентификатор эмитента выпуска в базе Интерфакс",
        "type": "integer"
      },
      "fininstid_operator": {
        "format": "double",
        "description": "Идентификатор оператора выпуска в базе Интерфакс",
        "type": "number"
      },
      "fintoolid": {
        "format": "int64",
        "description": "Идентификатор выпуска в базе Интерфакс",
        "type": "integer"
      },
      "firstcoupondate_nrd": {
        "format": "date-time",
        "description": "Дата начала начисления первого купона",
        "type": "string"
      },
      "formarketbonds_nrd": {
        "format": "double",
        "description": "Признак биржевой облигации",
        "type": "number"
      },
      "fraction_nrd": {
        "format": "double",
        "description": "Количество знаков после запятой",
        "type": "number"
      },
      "fullname_nrd": {
        "description": "Полное наименование выпуска",
        "type": "string"
      },
      "isincode": {
        "description": "ISIN",
        "type": "string"
      },
      "isincodebase_nrd": {
        "description": "ISIN представляемой бумаги (для расписок)",
        "type": "string"
      },
      "islombardcbr_nrd": {
        "format": "double",
        "description": "Признак включения в ломбардный список ЦБР (0/1)",
        "type": "number"
      },
      "isqualified_nrd": {
        "format": "int32",
        "description": "Признак ценной бумаги предназначенной для квалифицированных инвесторов (0/1)",
        "type": "integer"
      },
      "issuenumber": {
        "description": "Номер выпуска",
        "type": "string"
      },
      "issuername_nrd": {
        "description": "Эмитент",
        "type": "string"
      },
      "micexlist_nrd": {
        "description": "Листинг/внесписочные (ФБ ММВБ)",
        "type": "string"
      },
      "minlot_nrd": {
        "format": "double",
        "description": "Минимальный лот (в валюте номинала) для проведения расчетов в ISCD",
        "type": "number"
      },
      "nrdcode": {
        "description": "Идентификатор выпуска в базе НРД",
        "type": "string"
      },
      "nrdcompcode": {
        "description": "Код эмитента представляемой бумаги (для расписок)",
        "type": "string"
      },
      "numcoupons_nrd": {
        "format": "double",
        "description": "Количество купонов",
        "type": "number"
      },
      "placement_type_id": {
        "format": "double",
        "description": "Способ размещения",
        "type": "number"
      },
      "placementtype_nrd": {
        "description": "Наименование способа размещения ценных бумаг",
        "type": "string"
      },
      "placeprice_nrd": {
        "format": "double",
        "description": "Цена размещения в валюте номинала",
        "type": "number"
      },
      "planmtydate_nrd": {
        "format": "date-time",
        "description": "Дата погашения плановая",
        "type": "string"
      },
      "rate_type_id": {
        "format": "double",
        "description": "Идентификатор вида купона (процента)",
        "type": "number"
      },
      "ratetypenameeng_nrd": {
        "description": "Наименование вида купона (процента), английское",
        "type": "string"
      },
      "ratetypenamerus_nrd": {
        "description": "Наименование вида купона (процента), русское",
        "type": "string"
      },
      "regcode_nrd": {
        "description": "Регистрационный код",
        "type": "string"
      },
      "regdate_nrd": {
        "format": "date-time",
        "description": "Дата государственной регистрации выпуска",
        "type": "string"
      },
      "regdistdate_nrd": {
        "format": "date-time",
        "description": "Дата регистрации отчета",
        "type": "string"
      },
      "registrar_nrd": {
        "description": "Реестродержатель",
        "type": "string"
      },
      "registraracctype_nrd": {
        "description": "Тип лицевого счета(НД или НДЦД)",
        "type": "string"
      },
      "registraracctypedate_nrd": {
        "format": "date-time",
        "description": "Дата открытия лицевого счета / изменения типа ЛС",
        "type": "string"
      },
      "regorg_nrd": {
        "description": "Регистрирующий орган",
        "type": "string"
      },
      "rpregorg_nrd": {
        "description": "Орган осуществивший регистрацию отчета",
        "type": "string"
      },
      "rpstate_nrd": {
        "description": "Состояние отчета о выпуске",
        "type": "string"
      },
      "sec_form_id": {
        "format": "int64",
        "description": "Форма выпуска ценных бумаг",
        "type": "integer"
      },
      "sec_state_id": {
        "format": "double",
        "description": "Состояние выпуска",
        "type": "number"
      },
      "sec_type_br_code": {
        "description": "Тип ц.б. по классификации Банка России",
        "type": "string"
      },
      "sec_type_id": {
        "format": "double",
        "description": "Идентификатор типа ценной бумаги",
        "type": "number"
      },
      "secformnameeng_nrd": {
        "description": "Наименование формы выпуска (англ.)",
        "type": "string"
      },
      "secformnamerus_nrd": {
        "description": "Наименование формы выпуска (рус)",
        "type": "string"
      },
      "secstateeng_nrd": {
        "description": "Наименование состояния бумаги/выпуска/транша, англ.",
        "type": "string"
      },
      "secstaterus_nrd": {
        "description": "Наименование состояния бумаги/выпуска/транша, рус.",
        "type": "string"
      },
      "sectypenamebr_nrd": {
        "description": "Наименование типа ц.б. по классификации Банка России",
        "type": "string"
      },
      "sectypenameeng_nrd": {
        "description": "Наименование типа ценных бумаг, английское",
        "type": "string"
      },
      "sectypenamerus_nrd": {
        "description": "Наименование типа ценных бумаг, русское",
        "type": "string"
      },
      "share_category_id": {
        "format": "double",
        "description": "Категория акций",
        "type": "number"
      },
      "share_category_name_en_nrd": {
        "description": "Наименование категории, английское",
        "type": "string"
      },
      "share_category_name_nrd": {
        "description": "Наименование категории, русское",
        "type": "string"
      },
      "shqty": {
        "format": "double",
        "description": "Количество представляемых бумаг",
        "type": "number"
      },
      "specialized_depo_nrd": {
        "description": "Код НРД специализированного депозитария",
        "type": "string"
      },
      "sumissuevol_nrd": {
        "format": "double",
        "description": "Объем планируемый, штук",
        "type": "number"
      },
      "summarketvol_nrd": {
        "format": "double",
        "description": "Размещенное количество шт. (первоначальные данные)",
        "type": "number"
      },
      "summarketvolorig_nrd": {
        "format": "double",
        "description": "Объем в обращении, штук",
        "type": "number"
      },
      "unit_name_full_nrd": {
        "description": "Полное наименование ценной бумаги фонда",
        "type": "string"
      },
      "update_date": {
        "format": "date-time",
        "description": "Дата/время последнего изменения записи",
        "type": "string"
      },
      "nrd_sec_id": {
        "format": "int64",
        "description": "Идентификатор бумаги в базе НРД",
        "type": "integer"
      },
      "instr_type_id": {
        "format": "int32",
        "description": "Идентификатор типа бумаги в базе НРД",
        "type": "integer"
      },
      "nrd_date_from": {
        "format": "date-time",
        "description": "Дата начала обслуживания в НРД",
        "type": "string"
      },
      "nrd_date_to": {
        "format": "date-time",
        "description": "Дата окончания обслуживания в НРД",
        "type": "string"
      },
      "is_serviced": {
        "description": "Флаг «обслуживается НРД»",
        "type": "boolean"
      }
    }
  },
  "Requests.V2.Nsd.EmitentLicensesRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Nsd.NsdEmitentLicensesFields": {
    "type": "object",
    "properties": {
      "issuer": {
        "description": "Идентификатор эмитента в базе НРД",
        "type": "string"
      },
      "licence_activity": {
        "description": "Вид деятельности по лицензии",
        "type": "string"
      },
      "licence_date": {
        "format": "date-time",
        "description": "Дата выдачи по виду деятельности",
        "type": "string"
      },
      "licence_num": {
        "description": "Номер лицензии, выданной Банком России",
        "type": "string"
      },
      "licence_activity_id": {
        "format": "int64",
        "description": "Идентификатор лицензируемого вида деятельности",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Nsd.EmitentsRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      },
      "inn_as_string": {
        "description": "Признак вывода кодов в текстовом виде (необязательный): TRUE – выводить основные коды в текстовом виде (с ведущими нулями)",
        "type": "boolean"
      }
    }
  },
  "Nsd.NsdEmitentsFields": {
    "type": "object",
    "properties": {
      "address": {
        "description": "Юридический адрес",
        "type": "string"
      },
      "auth_capital": {
        "format": "double",
        "description": "Уставный капитал",
        "type": "number"
      },
      "bik": {
        "description": "БИК",
        "type": "string"
      },
      "cmp_code_fcsm": {
        "description": "Регистрационный номер ФСФР",
        "type": "string"
      },
      "country": {
        "description": "Юрисдикция эмитента, трёхбуквенный код ОКСМ.",
        "type": "string"
      },
      "credit_cmp": {
        "description": "“Y” для кредитной организации",
        "type": "string"
      },
      "egrul_date": {
        "format": "date-time",
        "description": "Дата государственной регистрации",
        "type": "string"
      },
      "e_mail": {
        "description": "Электронная почта",
        "type": "string"
      },
      "fax": {
        "description": "Факс",
        "type": "string"
      },
      "fininstid": {
        "format": "int64",
        "description": "Идентификатор эмитента выпуска в базе Интерфакс",
        "type": "integer"
      },
      "full_name": {
        "description": "Полное наименование эмитента",
        "type": "string"
      },
      "inn": {
        "description": "ИНН",
        "type": "string"
      },
      "is_bank_4_non_resident": {
        "description": "“Y” для иностранной кредитной организации",
        "type": "string"
      },
      "kpp": {
        "description": "КПП",
        "type": "string"
      },
      "lei_code": {
        "description": "LEI-код",
        "type": "string"
      },
      "ogrn": {
        "description": "Код ОГРН",
        "type": "string"
      },
      "okpo": {
        "description": "Код ОКПО",
        "type": "string"
      },
      "okved": {
        "description": "ОКВЭД",
        "type": "string"
      },
      "phone": {
        "description": "Телефоны",
        "type": "string"
      },
      "post_address": {
        "description": "Почтовый адрес",
        "type": "string"
      },
      "short_name": {
        "description": "Краткое наименование эмитента",
        "type": "string"
      },
      "state_reg_date": {
        "format": "date-time",
        "description": "Дата первичной регистрации",
        "type": "string"
      },
      "state_reg_num": {
        "description": "Регистрационный номер",
        "type": "string"
      },
      "tax_number": {
        "description": "Номер налоговой регистрации",
        "type": "string"
      },
      "tin": {
        "description": "TIN-код",
        "type": "string"
      },
      "www": {
        "description": "Адрес сайта",
        "type": "string"
      },
      "full_name_en": {
        "description": "Полное фирменное наименование (ин. яз.)",
        "type": "string"
      },
      "short_name_en": {
        "description": "Краткое наименование на ин. языке",
        "type": "string"
      },
      "company_type_name": {
        "description": "Полное наименование организационно-правовой формы",
        "type": "string"
      },
      "company_type_short_name": {
        "description": "Краткое наименование организационно-правовой формы (рус)",
        "type": "string"
      },
      "pif_type_name": {
        "description": "Наименование типа ПИФ",
        "type": "string"
      },
      "pif_type_name_en": {
        "description": "Наименование типа ПИФ англ.",
        "type": "string"
      },
      "fio_head": {
        "description": "ФИО первого лица",
        "type": "string"
      },
      "position_head": {
        "description": "Должность первого лица",
        "type": "string"
      },
      "egrul_organ_name": {
        "description": "Орган, внесший запись в ЕГРЮЛ",
        "type": "string"
      },
      "state_reg_number": {
        "description": "Номер гоc. регистрации при создании",
        "type": "string"
      },
      "market_id": {
        "format": "int64",
        "description": "Сектор рынка",
        "type": "integer"
      },
      "common_name_full_en": {
        "description": "Транслитерированное наименование",
        "type": "string"
      },
      "comp_type_id": {
        "format": "int64",
        "description": "Идентификатор организационно-правовой формы",
        "type": "integer"
      },
      "market_name": {
        "description": "Наименование сектора рынка (рус)",
        "type": "string"
      },
      "market_name_en": {
        "description": "Наименование сектора рынка (англ)",
        "type": "string"
      },
      "issuer": {
        "description": "Идентификатор эмитента в базе НРД",
        "type": "string"
      },
      "pif_type_mn": {
        "description": "Мнемонический код типа паевого фонда",
        "type": "string"
      }
    }
  },
  "Requests.V2.Nsd.FintoolCodesRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Nsd.NsdFintoolCodesFields": {
    "type": "object",
    "properties": {
      "code_nsd": {
        "description": "Идентификатор эмитента в базе НРД",
        "type": "string"
      },
      "fintoolid": {
        "format": "int64",
        "description": "Идентификатор инструмента в базе Интерфакс",
        "type": "integer"
      },
      "code_mn": {
        "description": "Мнемокод типа кода",
        "type": "string"
      },
      "code_name": {
        "description": "Наименование типа кода, русское",
        "type": "string"
      },
      "code": {
        "description": "Код",
        "type": "string"
      }
    }
  },
  "Requests.V2.Rating.CompanyRatingsRequest": {
    "type": "object",
    "properties": {
      "idType": {
        "description": "Возможные значения: “FININSTID”(по умолчанию), “A2”, “A3”, “ОГРН”, “OGRN”, “ИНН”, “INN”",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата актуальности рейтингов.",
        "type": "string"
      },
      "filter": {
        "description": "Строка фильтрации (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Rating.CompanyRatingsFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int32",
        "description": "Идентификатор рейтинга",
        "type": "integer"
      },
      "hid": {
        "format": "int32",
        "type": "integer"
      },
      "code_name": {
        "description": "Символьный код рейтинга",
        "type": "string"
      },
      "value": {
        "description": "Значение рейтинга",
        "type": "string"
      },
      "forecast": {
        "description": "Прогноз рейтинга",
        "type": "string"
      },
      "change": {
        "description": "Изменение рейтинга",
        "type": "string"
      },
      "date_award": {
        "format": "date-time",
        "description": "Дата рейтингового действия",
        "type": "string"
      },
      "fininstid": {
        "format": "int64",
        "description": "Идентификатор соответствующего организатора в базе Интерфакс.",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Rating.CompanyRatingsAggRequest": {
    "required": [
      "ids"
    ],
    "type": "object",
    "properties": {
      "ids": {
        "description": "Список идентификаторов компаний/стран (Обязательный)",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "idTypes": {
        "description": "Тип идентификатора компании/страны. (Необязательный) Возможные значения:\r\n\"OKPO\" - ОКПО\r\n\"OGRN\" - ОГРН\r\n\"INN\" - ИНН для российских компаний, TIN для остальных\r\n\"TIN\" - TIN (США)\r\n\"LEI_CODE\" - LEI-код\r\n\"SWIFT\" - Код SWIFT\r\n\"ISSUER_NRD\" - Идентификатор эмитента в базе НРД\r\n\"CODE_IF\" - Идентификатор эмитента\r\n\"FININSTID\" - Идентификатор эмитента в базе Интерфакс\r\n\"SPARKID\" - Идентификатор эмитента в базе СПАРК\r\n\"A2\" - Идентификатор страны A2 по ISO 3166-1 Alpha-2\r\n\"A3\" - Идентификатор страны A3 по ISO 3166-1 Alpha-3",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "companyName": {
        "description": "Тип наименования компании, выводимого в поле company_name. (Необязательный) Возможные значения:\r\n\"SHORTNAME_RUS\"\r\n\"FULLNAME_RUS\"\r\n\"SHORTNAME_ENG\"\r\n\"FULLNAME_ENG\"\r\n\"SHORTNAME_RUS_NRD\"\r\n\"FULLNAME_RUS_NRD\"\r\n\"SHORTNAME_ENG_NRD\"\r\n\"FULLNAME_ENG_NRD\"\r\n\"SHORTNAME_RUS_SPARK\"\r\n\"FULLNAME_RUS_SPARK\"\r\n\"SHORTNAME_ENG_SPARK\"\r\n\"FULLNAME_ENG_SPARK\"",
        "type": "string"
      },
      "aggType": {
        "description": "Идентификатор типа агрегата. (Необязательный) Допустимые значения: MIN, MAX. По умолчанию MAX.",
        "type": "string"
      },
      "usingType": {
        "description": "(Необязательный, действует только на российские компании) \r\nВариант использования иностранных и российских рейтингов. Допустимые значения: Rus/Big3/Composite. \r\nПо умолчанию Rus – используются только российские рейтинги. \r\nBig3 – используются только иностранные рейтинги. \r\nComposite – при отсутствии российских рейтингов у российской компании использовать рейтинги иностранных рейтинговых агентств, но значение приводить к шкале для российских субъектов по таблице соответствия.",
        "type": "string"
      },
      "priorityRA": {
        "description": "(Необязательный, действует только на российские компании) \r\nПриоритетное российское рейтинговое агентство. Допустимые значения: AKRA/MAX. \r\nПо умолчанию AKRA – при прочих равных показываем рейтинги АКРА. RAEX показываем, только если рейтингов от АКРА нет совсем. \r\nMAX – показываем АКРА, RAEX показываем, только если он лучше.",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "(Необязательный) Дата рейтингов. Если не задано, используется текущая дата.",
        "type": "string"
      }
    }
  },
  "Rating.CompanyRatingsAggFields": {
    "type": "object",
    "properties": {
      "agg_type": {
        "type": "string"
      },
      "dt": {
        "format": "date-time",
        "type": "string"
      },
      "agg_l5": {
        "type": "string"
      },
      "agg_n5": {
        "format": "double",
        "type": "number"
      },
      "agg_l12": {
        "type": "string"
      },
      "agg_n12": {
        "format": "double",
        "type": "number"
      },
      "agg_l26": {
        "type": "string"
      },
      "agg_n26": {
        "format": "double",
        "type": "number"
      },
      "id_rating": {
        "format": "double",
        "type": "number"
      },
      "last_dt": {
        "format": "date-time",
        "type": "string"
      },
      "last": {
        "type": "string"
      },
      "code": {
        "type": "string"
      },
      "code_type": {
        "type": "string"
      },
      "company_name": {
        "type": "string"
      },
      "agg_n10": {
        "format": "double",
        "type": "number"
      },
      "agg_l10": {
        "type": "string"
      }
    }
  },
  "Requests.V2.Rating.CompanyRatingsAggV2Request": {
    "required": [
      "ids"
    ],
    "type": "object",
    "properties": {
      "ids": {
        "description": "Список идентификаторов компаний/стран (Обязательный)",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Requests.V2.Rating.CompanyAggIdType"
        }
      },
      "companyName": {
        "description": "Тип наименования компании, выводимого в поле company_name. (Необязательный) Возможные значения:\r\n\"SHORTNAME_RUS\"\r\n\"FULLNAME_RUS\"\r\n\"SHORTNAME_ENG\"\r\n\"FULLNAME_ENG\"\r\n\"SHORTNAME_RUS_NRD\"\r\n\"FULLNAME_RUS_NRD\"\r\n\"SHORTNAME_ENG_NRD\"\r\n\"FULLNAME_ENG_NRD\"\r\n\"SHORTNAME_RUS_SPARK\"\r\n\"FULLNAME_RUS_SPARK\"\r\n\"SHORTNAME_ENG_SPARK\"\r\n\"FULLNAME_ENG_SPARK\"",
        "type": "string"
      },
      "aggType": {
        "description": "Идентификатор типа агрегата. (Необязательный) Допустимые значения: MIN, MAX. По умолчанию MAX.",
        "type": "string"
      },
      "usingType": {
        "description": "(Необязательный, действует только на российские компании) \r\nВариант использования иностранных и российских рейтингов. Допустимые значения: Rus/Big3/Composite. \r\nПо умолчанию Rus – используются только российские рейтинги. \r\nBig3 – используются только иностранные рейтинги. \r\nComposite – при отсутствии российских рейтингов у российской компании использовать рейтинги иностранных рейтинговых агентств, но значение приводить к шкале для российских субъектов по таблице соответствия.",
        "type": "string"
      },
      "priorityRA": {
        "description": "(Необязательный, действует только на российские компании) \r\nПриоритетное российское рейтинговое агентство. Допустимые значения: AKRA/MAX. \r\nПо умолчанию AKRA – при прочих равных показываем рейтинги АКРА. RAEX показываем, только если рейтингов от АКРА нет совсем. \r\nMAX – показываем АКРА, RAEX показываем, только если он лучше.",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "(Необязательный) Дата рейтингов. Если не задано, используется текущая дата.",
        "type": "string"
      }
    }
  },
  "Requests.V2.Rating.CompanyAggIdType": {
    "type": "object",
    "properties": {
      "value": {
        "description": "Идентификатор инструмента",
        "type": "string"
      },
      "type": {
        "description": "Тип идентификатора компании/страны. (Необязательный) Возможные значения:\r\n\"OKPO\" - ОКПО\r\n\"OGRN\" - ОГРН\r\n\"INN\" - ИНН для российских компаний, TIN для остальных\r\n\"TIN\" - TIN (США)\r\n\"LEI_CODE\" - LEI-код\r\n\"SWIFT\" - Код SWIFT\r\n\"ISSUER_NRD\" - Идентификатор эмитента в базе НРД\r\n\"CODE_IF\" - Идентификатор эмитента\r\n\"FININSTID\" - Идентификатор эмитента в базе Интерфакс\r\n\"SPARKID\" - Идентификатор эмитента в базе СПАРК\r\n\"A2\" - Идентификатор страны A2 по ISO 3166-1 Alpha-2\r\n\"A3\" - Идентификатор страны A3 по ISO 3166-1 Alpha-3",
        "type": "string"
      }
    }
  },
  "Rating.CompanyRatingsAggV2Response": {
    "type": "object",
    "properties": {
      "agg_type": {
        "type": "string"
      },
      "dt": {
        "format": "date-time",
        "type": "string"
      },
      "companies": {
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Rating.AggCompany"
        }
      }
    }
  },
  "Rating.AggCompany": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string"
      },
      "code_type": {
        "type": "string"
      },
      "company_name": {
        "type": "string"
      },
      "agg_scales": {
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Rating.AggScale"
        }
      }
    }
  },
  "Rating.AggScale": {
    "type": "object",
    "properties": {
      "scale": {
        "type": "string"
      },
      "value_l": {
        "type": "string"
      },
      "value_n": {
        "format": "double",
        "type": "number"
      },
      "agg_reasons": {
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Rating.AggReason"
        }
      }
    }
  },
  "Rating.AggReason": {
    "type": "object",
    "properties": {
      "id_rating": {
        "format": "int32",
        "type": "integer"
      },
      "last_dt": {
        "format": "date-time",
        "type": "string"
      },
      "last": {
        "type": "string"
      }
    }
  },
  "Requests.V2.Rating.CompanyRatingsHistRequest": {
    "required": [
      "dateFrom",
      "dateTo"
    ],
    "type": "object",
    "properties": {
      "idType": {
        "description": "",
        "type": "string"
      },
      "dateFrom": {
        "format": "date-time",
        "description": "Дата актуальности рейтингов (обязательный).",
        "type": "string"
      },
      "dateTo": {
        "format": "date-time",
        "description": "Дата актуальности рейтингов (обязательный).",
        "type": "string"
      },
      "sort": {
        "format": "int32",
        "description": "",
        "type": "integer"
      },
      "ratings": {
        "description": "Список идентификаторов рейтингов",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    }
  },
  "Rating.CompanyRatingsHistFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int32",
        "description": "Идентификатор рейтинга",
        "type": "integer"
      },
      "hid": {
        "format": "int32",
        "description": "Идентификатор рейтинга (устарел, надо использовать rating_id)",
        "type": "integer"
      },
      "rating_id": {
        "format": "int64",
        "description": "Идентификатор вида рейтинга",
        "type": "integer"
      },
      "agency": {
        "description": "Агентство",
        "type": "string"
      },
      "rating": {
        "description": "Символьный код рейтинга",
        "type": "string"
      },
      "last": {
        "description": "Значение рейтинга",
        "type": "string"
      },
      "forecast": {
        "description": "Прогноз рейтинга",
        "type": "string"
      },
      "change": {
        "description": "Изменение рейтинга",
        "type": "string"
      },
      "date_award": {
        "format": "date-time",
        "description": "Дата рейтингового действия",
        "type": "string"
      },
      "fininstid": {
        "format": "int64",
        "description": "Идентификатор компании в базе Интерфакс",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Rating.CompanyRatingsTableRequest": {
    "required": [
      "ids",
      "date"
    ],
    "type": "object",
    "properties": {
      "ids": {
        "description": "Массив объектов с описанием идентификаторов компаний/стран и их типов",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Requests.V2.Rating.CompanyId"
        }
      },
      "date": {
        "format": "date-time",
        "description": "Дата, на которую должны быть загружены данные (обязательный)",
        "type": "string"
      },
      "companyName": {
        "description": "Тип наименования компании/страны, выводимого в результатах запроса. (необязательный) Возможные значения:\r\n\"SHORTNAME_RUS\"\r\n\"FULLNAME_RUS\"\r\n\"SHORTNAME_ENG\"\r\n\"FULLNAME_ENG\"\r\n\"SHORTNAME_RUS_NRD\"\r\n\"FULLNAME_RUS_NRD\"\r\n\"SHORTNAME_ENG_NRD\"\r\n\"FULLNAME_ENG_NRD\"\r\n\"SHORTNAME_RUS_SPARK\"\r\n\"FULLNAME_RUS_SPARK\"\r\n\"SHORTNAME_ENG_SPARK\"\r\n\"FULLNAME_ENG_SPARK\"",
        "type": "string"
      },
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Rating.CompanyId": {
    "type": "object",
    "properties": {
      "id": {
        "description": "Идентификаторы компаний в базе Интерфакс (обязательный)",
        "type": "string"
      },
      "idType": {
        "description": "Тип идентификатора компании. (необязательный) Возможные значения:\r\n\"OKPO\" - ОКПО\r\n\"OGRN\" - ОГРН\r\n\"INN\" - ИНН для российских компаний, TIN для остальных\r\n\"TIN\" - TIN (США)\r\n\"LEI_CODE\" - LEI-код\r\n\"SWIFT\" - Код SWIFT\r\n\"ISSUER_NRD\" - Идентификатор эмитента в базе НРД\r\n\"CODE_IF\" - Идентификатор эмитента\r\n\"FININSTID\" - Идентификатор эмитента в базе Интерфакс\r\n\"SPARKID\" - Идентификатор эмитента в базе СПАРК\r\n\"A2\" - Идентификатор страны A2 по ISO 3166-1 Alpha-2\r\n\"A3\" - Идентификатор страны A3 по ISO 3166-1 Alpha-3",
        "type": "string"
      }
    }
  },
  "Rating.CompanyRatingsTableFields": {
    "type": "object",
    "properties": {
      "name_ra": {
        "description": "Краткое наименование рейтингового действия",
        "type": "string"
      },
      "dt": {
        "format": "date-time",
        "description": "Дата рейтингового события",
        "type": "string"
      },
      "last": {
        "description": "Значение рейтинга по шкале конкретного рейтингового агентства. Например, «Baaa1» для рейтинга Moody’s.",
        "type": "string"
      },
      "last_dt": {
        "format": "date-time",
        "description": "Дата последнего события",
        "type": "string"
      },
      "change": {
        "description": "Изменение (подтвержден, понижен, установлен и т.п.)",
        "type": "string"
      },
      "forecast": {
        "description": "Прогноз рейтинга",
        "type": "string"
      },
      "advanced": {
        "description": "Стадии установки рейтинга: На пересмотре, Ожидаемый, Предварительный, Основной",
        "type": "string"
      },
      "prev": {
        "description": "Предыдущее значение рейтинга",
        "type": "string"
      },
      "prev_dt": {
        "format": "date-time",
        "description": "Дата, когда было присвоено предыдущее значение рейтинга",
        "type": "string"
      },
      "id_rating": {
        "format": "int32",
        "description": "Идентификатор вида рейтинга",
        "type": "integer"
      },
      "code": {
        "description": "Символьный код",
        "type": "string"
      },
      "code_type": {
        "description": "Тип идентификатора инструмента",
        "type": "string"
      },
      "company_name": {
        "description": "Имя компании",
        "type": "string"
      }
    }
  },
  "Requests.V2.Rating.ListCompaniesRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Rating.ListCompaniesFields": {
    "type": "object",
    "properties": {
      "code": {
        "description": "Символьный идентификатор компании",
        "type": "string"
      },
      "name_rus": {
        "description": "Русское наименование компании",
        "type": "string"
      },
      "name_eng": {
        "description": "Английское наименование компании",
        "type": "string"
      },
      "search_info": {
        "description": "Информация для поиска",
        "type": "string"
      },
      "code_parent": {
        "description": "Символьный идентификатор управляющей компании(для фондов)",
        "type": "string"
      },
      "okpo": {
        "description": "Код ОКПО",
        "type": "string"
      },
      "okato_region": {
        "format": "decimal(38,0)",
        "description": "Код региона",
        "type": "number"
      },
      "id": {
        "format": "int32",
        "description": "Идентификатор компании в базе ЭФиР",
        "type": "integer"
      },
      "ogrn": {
        "description": "Код ОГРН",
        "type": "string"
      },
      "inn": {
        "description": "ИНН",
        "type": "string"
      },
      "fininstid": {
        "format": "int64",
        "description": "Идентификатор компании в базе Интерфакс",
        "type": "integer"
      },
      "bic": {
        "description": "Банковский идентификационный код (БИК)",
        "type": "string"
      },
      "swift_bic": {
        "description": "SWIFT-код",
        "type": "string"
      }
    }
  },
  "Requests.V2.Rating.ListRatingsRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Rating.ListRatingsFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int32",
        "description": "Идентификатор рейтинга (устарел, надо использовать rating_id)",
        "type": "integer"
      },
      "rating_id": {
        "format": "int64",
        "description": "Идентификатор вида рейтинга",
        "type": "integer"
      },
      "code_name": {
        "description": "Символьный код рейтинга",
        "type": "string"
      },
      "agency": {
        "description": "Рейтинговое агентство (рус)",
        "type": "string"
      },
      "fullname_rus": {
        "description": "Русское наименование рейтинга",
        "type": "string"
      },
      "fullname_eng": {
        "description": "Английское наименование рейтинга",
        "type": "string"
      },
      "for_instrument": {
        "format": "int32",
        "description": "= 1, если рейтинг относится к инструменту",
        "type": "integer"
      },
      "for_company": {
        "format": "int32",
        "description": "= 1, если рейтинг относится к эмитенту",
        "type": "integer"
      },
      "agency_eng": {
        "description": "Рейтинговое агентство (анг)",
        "type": "string"
      },
      "official_name": {
        "description": "Официальное наименование рейтинга",
        "type": "string"
      },
      "is_credit": {
        "format": "int32",
        "description": "= 1 для кредитных рейтингов",
        "type": "integer"
      },
      "term_type": {
        "description": "Идентификатор типа срочности",
        "type": "string"
      },
      "term_type_name": {
        "description": "Наименование типа срочности",
        "type": "string"
      },
      "currency_type": {
        "description": "Идентификатор типа валюты",
        "type": "string"
      },
      "currency_type_name": {
        "description": "Наименование типа валюты",
        "type": "string"
      },
      "scale_type": {
        "description": "Идентификатор типа шкалы",
        "type": "string"
      },
      "scale_type_name": {
        "description": "Наименование типа шкалы",
        "type": "string"
      },
      "is_archive": {
        "format": "int32",
        "description": "= 1 для архивных (не используемых на текущий момент) рейтингов",
        "type": "integer"
      },
      "is_accred_br": {
        "format": "int32",
        "description": "Аккредитация Банка России",
        "type": "integer"
      },
      "doc_511p": {
        "description": "511-П",
        "type": "string"
      },
      "doc_421p": {
        "description": "421-П",
        "type": "string"
      },
      "doc_180i": {
        "description": "180-И",
        "type": "string"
      },
      "agency_id": {
        "format": "int32",
        "description": "Идентификатор агентства",
        "type": "integer"
      },
      "usedInAgg": {
        "description": "Флаг участия в расчёте агрегированных рейтингов.",
        "type": "boolean"
      },
      "scale_id": {
        "format": "int32",
        "description": "Идентификатор шкалы",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Rating.ListScalesRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Фильтр запроса",
        "type": "string"
      }
    }
  },
  "Rating.ScaleFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int32,key",
        "description": "Идентификатор шкалы",
        "type": "integer"
      },
      "shortname_rus": {
        "description": "Название на русском языке",
        "type": "string"
      }
    }
  },
  "Requests.V2.Rating.ListScaleValuesRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Фильтр запроса",
        "type": "string"
      }
    }
  },
  "Rating.ScaleValueFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int32,key",
        "description": "Идентификатор значения",
        "type": "integer"
      },
      "scale_id": {
        "format": "int32",
        "description": "Идентификатор шкалы",
        "type": "integer"
      },
      "rating_value": {
        "description": "Значение рейтинга",
        "type": "string"
      },
      "rating_level": {
        "format": "int64",
        "description": "Уровень значения",
        "type": "integer"
      },
      "fullname_rus": {
        "description": "Наименование на русском",
        "type": "string"
      },
      "description": {
        "description": "Описание значения рейтинга",
        "type": "string"
      }
    }
  },
  "Requests.V2.Rating.ListSecuritiesRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Rating.ListSecuritiesFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int64",
        "description": "Идентификатор инструмента",
        "type": "integer"
      },
      "name": {
        "type": "string"
      },
      "shortname_rus": {
        "description": "Краткое русское наименование",
        "type": "string"
      },
      "secname": {
        "description": "Наименование поля",
        "type": "string"
      },
      "isin": {
        "description": "Код ISIN",
        "type": "string"
      },
      "cfi_ifx": {
        "description": "Код типа инструмента по классификатору Интерфакс",
        "type": "string"
      },
      "exch": {
        "format": "int32",
        "description": "Наименование площадки/субплощадки, на которой торгуется инструмент",
        "type": "integer"
      },
      "seccode": {
        "description": "Торговый код",
        "type": "string"
      },
      "symbol_ts": {
        "description": "Краткое торговое наименование на торговой площадке",
        "type": "string"
      },
      "code_issuer": {
        "description": "Символьный код эмитента",
        "type": "string"
      },
      "lotsize": {
        "format": "int64",
        "description": "Размер лота",
        "type": "integer"
      },
      "mat_date": {
        "description": "Дата погашения (экспирации)",
        "type": "string"
      },
      "status": {
        "format": "int32",
        "description": "Статус",
        "type": "integer"
      },
      "issuer": {
        "description": "Эмитент",
        "type": "string"
      },
      "sector": {
        "description": "Сектор",
        "type": "string"
      },
      "currency": {
        "description": "Валюта",
        "type": "string"
      },
      "reg_num": {
        "description": "Регистрационный номер",
        "type": "string"
      }
    }
  },
  "Requests.V2.Rating.RatingsHistoryRequest": {
    "type": "object",
    "properties": {
      "dateFrom": {
        "format": "date-time",
        "description": "Дата начала периода",
        "type": "string"
      },
      "dateTo": {
        "format": "date-time",
        "description": "Дата окончания периода",
        "type": "string"
      },
      "sort": {
        "format": "int32",
        "description": "Направление сортировки:\r\n0 – от старых к новым\r\n1 – от новых к старым",
        "type": "integer"
      },
      "filter": {
        "description": "Строка фильтрации (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      },
      "pageNum": {
        "format": "int32",
        "description": "Номер страницы выборки. Если указан, то Requests.V2.Rating.RatingsHistoryRequest.count игнорируется",
        "type": "integer"
      },
      "pageSize": {
        "format": "int32",
        "description": "Размер одной страницы выборки при указанном pageNum.",
        "type": "integer"
      }
    }
  },
  "Rating.RatingsHistoryFields": {
    "type": "object",
    "properties": {
      "name_ra": {
        "description": "Описание рейтингового события",
        "type": "string"
      },
      "dt": {
        "format": "date-time",
        "description": "Дата рейтингового события",
        "type": "string"
      },
      "last": {
        "description": "Значение рейтинга",
        "type": "string"
      },
      "last_dt": {
        "format": "date-time",
        "description": "Дата присвоения рейтинга",
        "type": "string"
      },
      "change": {
        "description": "Изменение рейтинга",
        "type": "string"
      },
      "forecast": {
        "description": "Прогноз рейтинга",
        "type": "string"
      },
      "advanced": {
        "description": "Дополнительные параметры рейтинга – основной, на пересмотре, ожидаемый, предварительный",
        "type": "string"
      },
      "prev": {
        "description": "Предыдущее значение рейтинга",
        "type": "string"
      },
      "prev_dt": {
        "format": "date-time",
        "description": "Дата присвоения предыдущего значения рейтинга",
        "type": "string"
      },
      "rating_agency": {
        "description": "Наименование рейтингового агентства",
        "type": "string"
      },
      "rating_code": {
        "description": "Кодовое наименование рейтинга",
        "type": "string"
      },
      "rating_full_name_rus": {
        "description": "Полное русское наименование рейтинга",
        "type": "string"
      },
      "rating_official_name": {
        "description": "Оригинальное наименование рейтинга",
        "type": "string"
      },
      "rating_object_type": {
        "description": "Объект события – компания или инструмент",
        "type": "string"
      },
      "is_credit_rating": {
        "format": "int32",
        "description": "Признак кредитного рейтинга (0/1)",
        "type": "integer"
      },
      "rating_term": {
        "description": "Срочность (долгосрочный, краткосрочный, не определён)",
        "type": "string"
      },
      "scale_type": {
        "description": "Шкала (международная, национальная)",
        "type": "string"
      },
      "scale_cur": {
        "description": "Валюта для международной шкалы(иностранная, локальная, не определена)",
        "type": "string"
      },
      "short_name_org": {
        "description": "Краткое русское наименование компании",
        "type": "string"
      },
      "inn": {
        "description": "INN компании",
        "type": "string"
      },
      "lei": {
        "description": "LEI компании",
        "type": "string"
      },
      "sector": {
        "description": "Сектор деятельности компании",
        "type": "string"
      },
      "country": {
        "description": "Страна компании",
        "type": "string"
      },
      "role": {
        "description": "Роль организации по отношению к инструменту",
        "type": "string"
      },
      "short_name_issue": {
        "description": "Краткое русское наименование инструмента.",
        "type": "string"
      },
      "isin": {
        "description": "ISIN инструмента",
        "type": "string"
      },
      "reg_code": {
        "description": "Регистрационный код инструмента",
        "type": "string"
      },
      "sector_by_rating": {
        "description": "Сектор компании в соответствии с кодом рейтинга",
        "type": "string"
      },
      "region": {
        "description": "Регион, для российских эмитентов",
        "type": "string"
      },
      "is_archive": {
        "format": "int32",
        "description": "1 - Признак неиспользуемого (архивного) рейтинга",
        "type": "integer"
      },
      "is_accred_br": {
        "format": "int32",
        "description": "1 - Признак аккредитации рейтингового агентства Банком России",
        "type": "integer"
      },
      "full_name_org": {
        "description": "Полное русское наименование компании",
        "type": "string"
      },
      "press_release": {
        "description": "Ссылка на пресс-релиз",
        "type": "string"
      },
      "is_sf": {
        "format": "decimal(1,0)",
        "description": "1 - облигация является структурированным продуктом",
        "type": "number"
      },
      "isregion": {
        "format": "decimal(1,0)",
        "description": "1 – субъект РФ; 0 – муниципалитет РФ; пусто – иное.",
        "type": "number"
      },
      "rating_id": {
        "format": "int64",
        "description": "Идентификатор рейтинга",
        "type": "integer"
      },
      "fininstid": {
        "format": "int64",
        "description": "Идентификатор компании",
        "type": "integer"
      },
      "fintoolid": {
        "format": "int64",
        "description": "Идентификатор инструмента",
        "type": "integer"
      },
      "counter": {
        "format": "int32",
        "description": "Общее количество записей в выборке",
        "type": "integer"
      },
      "rn": {
        "format": "int32",
        "description": "Номер записи в выборке",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Rating.SecurityRatingsRequest": {
    "required": [
      "isin",
      "date"
    ],
    "type": "object",
    "properties": {
      "isin": {
        "description": "ISIN инструмента или регистрационный номер (reg_code) (обязательный).",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата актуальности рейтингов (обязательный).",
        "type": "string"
      },
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Rating.SecurityRatingsFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int32",
        "description": "Идентификатор рейтинга",
        "type": "integer"
      },
      "hid": {
        "format": "int32",
        "type": "integer"
      },
      "code_name": {
        "description": "Символьный код рейтинга",
        "type": "string"
      },
      "id_value": {
        "description": "Значение рейтинга",
        "type": "string"
      },
      "forecast": {
        "description": "Прогноз рейтинга",
        "type": "string"
      },
      "change": {
        "description": "Изменение рейтинга",
        "type": "string"
      },
      "date_award": {
        "format": "date-time",
        "description": "Дата рейтингового действия",
        "type": "string"
      },
      "role": {
        "format": "decimal(1,0)",
        "description": "0 – рейтинг инструмента\r\n1 – рейтинг эмитента\r\n2 – рейтинг заемщика\r\n3 – рейтинг гаранта или поручителя\r\n4 - офферент",
        "type": "number"
      },
      "okpo": {
        "description": "ОКПО соответствующего организатора выпуска",
        "type": "string"
      },
      "fininstid": {
        "format": "int64",
        "description": "Идентификатор соответствующего организатора в базе Интерфакс",
        "type": "integer"
      },
      "fintoolid": {
        "format": "int64",
        "description": "Идентификатор",
        "type": "integer"
      },
      "isin": {
        "description": "ISIN",
        "type": "string"
      }
    }
  },
  "Requests.V2.Rating.SecurityRatingsByFintoolIdRequest": {
    "required": [
      "date"
    ],
    "type": "object",
    "properties": {
      "date": {
        "format": "date-time",
        "description": "Дата актуальности рейтингов (обязательный).",
        "type": "string"
      },
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Rating.SecurityRatingsAggRequest": {
    "required": [
      "ids"
    ],
    "type": "object",
    "properties": {
      "ids": {
        "description": "(Обязательный) Список идентификаторов инструментов.",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "aggType": {
        "description": "(Необязательный) Идентификатор типа агрегата. Допустимые значения: MIN, MAX. По умолчанию MAX.",
        "type": "string"
      },
      "usingType": {
        "description": "(Необязательный, действует только на российские инструменты) \r\nВариант использования иностранных и российских рейтингов. Допустимые значения: Rus/Big3/Composite. \r\nПо умолчанию Rus – используются только российские рейтинги. \r\nBig3 – используются только иностранные рейтинги. \r\nComposite – при отсутствии российских рейтингов у российского инструмента использовать рейтинги иностранных рейтинговых агентств, но значение приводить к шкале для российских субъектов по таблице соответствия.",
        "type": "string"
      },
      "priorityRA": {
        "description": "(Необязательный, действует только на российские инструменты) \r\nПриоритетное российское рейтинговое агентство. Допустимые значения: AKRA/MAX. \r\nПо умолчанию AKRA – при прочих равных показываем рейтинги АКРА. RAEX показываем только если рейтингов от АКРА нет совсем. \r\nMAX – показываем АКРА, RAEX показываем только если он лучше.",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "(Необязательный) Дата рейтингов. Если не задано, используется текущая дата.",
        "type": "string"
      }
    }
  },
  "Rating.SecurityRatingsAggFields": {
    "type": "object",
    "properties": {
      "agg_type": {
        "description": "Идентификатор агрегата",
        "type": "string"
      },
      "dt": {
        "format": "date-time",
        "description": "Дата расчета",
        "type": "string"
      },
      "agg_l5": {
        "description": "Символьное значение агрегата по шкале L5",
        "type": "string"
      },
      "agg_n5": {
        "format": "decimal(38,0)",
        "description": "Численное значение агрегата по шкале L5",
        "type": "number"
      },
      "agg_l12": {
        "description": "Символьное значение агрегата по шкале L12",
        "type": "string"
      },
      "agg_n12": {
        "format": "decimal(38,0)",
        "description": "Численное значение агрегата по шкале L12",
        "type": "number"
      },
      "agg_l26": {
        "description": "Символьное значение агрегата по шкале L26",
        "type": "string"
      },
      "agg_n26": {
        "format": "decimal(38,0)",
        "description": "Численное значение агрегата по шкале L26",
        "type": "number"
      },
      "id_rating": {
        "format": "int64",
        "description": "Идентификатор рейтинга",
        "type": "integer"
      },
      "last_dt": {
        "format": "date-time",
        "description": "Дата рейтингового действия",
        "type": "string"
      },
      "last": {
        "description": "Значение рейтинга",
        "type": "string"
      },
      "code": {
        "format": "int64",
        "description": "Идентификатор инструмента",
        "type": "integer"
      },
      "agg_n10": {
        "format": "decimal(38,0)",
        "description": "Значение агрегата по шкале L10",
        "type": "number"
      },
      "agg_l10": {
        "description": "Значение агрегата по шкале L10",
        "type": "string"
      }
    }
  },
  "Rating.SecurityRatingsAggV2Response": {
    "type": "object",
    "properties": {
      "agg_type": {
        "type": "string"
      },
      "dt": {
        "format": "date-time",
        "type": "string"
      },
      "instruments": {
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Rating.AggInstrument"
        }
      }
    }
  },
  "Rating.AggInstrument": {
    "type": "object",
    "properties": {
      "code": {
        "type": "string"
      },
      "agg_scales": {
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Rating.AggScale"
        }
      }
    }
  },
  "Requests.V2.Rating.SecurityRatingsHistRequest": {
    "required": [
      "dateFrom",
      "dateTo"
    ],
    "type": "object",
    "properties": {
      "isin": {
        "description": "ISIN инструмента или регистрационный номер (reg_code). \r\nЕсли не указан, то возвращаются рейтинги, присвоенные в интервале с dateFrom по dateTo, но не более чем за неделю (с dateTo-6 по dateTo).",
        "type": "string"
      },
      "dateFrom": {
        "format": "date-time",
        "description": "Дата актуальности рейтингов (обязательный)",
        "type": "string"
      },
      "dateTo": {
        "format": "date-time",
        "description": "Дата актуальности рейтингов (обязательный)",
        "type": "string"
      },
      "sort": {
        "format": "int32",
        "type": "integer"
      },
      "flags": {
        "format": "int32",
        "type": "integer"
      },
      "bondRatings": {
        "description": "Список идентификаторов рейтингов бумаг(необязательный).",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "format": "int32",
          "type": "integer"
        }
      },
      "companyRatings": {
        "description": "Список идентификаторов рейтингов компаний (необязательный).",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "format": "int32",
          "type": "integer"
        }
      }
    }
  },
  "Rating.SecurityRatingsHistFields": {
    "type": "object",
    "properties": {
      "hid": {
        "format": "int32",
        "description": "Идентификатор рейтинга (устарел, надо использовать id_rating)",
        "type": "integer"
      },
      "id_rating": {
        "format": "int64",
        "description": "Идентификатор вида рейтинга",
        "type": "integer"
      },
      "agency": {
        "description": "Агентство",
        "type": "string"
      },
      "code_name": {
        "description": "Символьный код рейтинга",
        "type": "string"
      },
      "id_value": {
        "description": "Значение рейтинга",
        "type": "string"
      },
      "forecast": {
        "description": "Прогноз рейтинга",
        "type": "string"
      },
      "change": {
        "description": "Изменение рейтинга",
        "type": "string"
      },
      "date_award": {
        "format": "date-time",
        "description": "Дата рейтингового действия",
        "type": "string"
      },
      "role_id": {
        "format": "int32",
        "description": "0 – рейтинг инструмента\r\n1 – рейтинг эмитента\r\n2 – рейтинг заемщика\r\n3 – рейтинг гаранта или поручителя",
        "type": "integer"
      },
      "role_name": {
        "description": "Наименование роли",
        "type": "string"
      },
      "fintoolid": {
        "format": "int64",
        "description": "Идентификатор соответствующего организатора в базе Интерфакс",
        "type": "integer"
      },
      "fininstid": {
        "format": "int64",
        "description": "Идентификатор выпуска в базе Интерфакс",
        "type": "integer"
      },
      "isin": {
        "description": "ISIN",
        "type": "string"
      }
    }
  },
  "Requests.V2.Rating.SecurityRatingsTableRequest": {
    "required": [
      "ids"
    ],
    "type": "object",
    "properties": {
      "ids": {
        "description": "Идентификаторы бумаг – ISIN, рег.коды (обязательный).",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "aggType": {
        "description": "(Необязательный) Идентификатор типа агрегата. Допустимые значения: MIN, MAX. По умолчанию MAX.",
        "type": "string"
      },
      "usingType": {
        "description": "(Необязательный, действует только на российские инструменты) \r\nВариант использования иностранных и российских рейтингов. Допустимые значения: Rus/Big3/Composite. \r\nПо умолчанию Rus – используются только российские рейтинги. \r\nBig3 – используются только иностранные рейтинги. \r\nComposite – при отсутствии российских рейтингов у российского инструмента использовать рейтинги иностранных рейтинговых агентств, но значение приводить к шкале для российских субъектов по таблице соответствия.",
        "type": "string"
      },
      "priorityRA": {
        "description": "(Необязательный, действует только на российские инструменты) \r\nПриоритетное российское рейтинговое агентство. Допустимые значения: AKRA/MAX. \r\nПо умолчанию AKRA – при прочих равных показываем рейтинги АКРА. RAEX показываем только если рейтингов от АКРА нет совсем. \r\nMAX – показываем АКРА, RAEX показываем только если он лучше.",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата, на которую должны быть загружены данные. Если не указана, используется текущая дата.",
        "type": "string"
      },
      "filter": {
        "description": "Строка фильтрации. (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Rating.SecurityRatingTableFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int32",
        "description": "Идентификатор рейтинга",
        "type": "integer"
      },
      "hid": {
        "format": "int32",
        "type": "integer"
      },
      "code_name": {
        "type": "string"
      },
      "id_value": {
        "type": "string"
      },
      "forecast": {
        "type": "string"
      },
      "change": {
        "type": "string"
      },
      "date_award": {
        "format": "date-time",
        "type": "string"
      },
      "role": {
        "format": "int32",
        "type": "integer"
      },
      "okpo": {
        "type": "string"
      },
      "fininstid": {
        "format": "int64",
        "type": "integer"
      },
      "fintoolid": {
        "format": "int64",
        "type": "integer"
      },
      "isin": {
        "type": "string"
      },
      "id_rating": {
        "format": "int64",
        "type": "integer"
      },
      "code": {
        "type": "string"
      },
      "shortname_rus": {
        "type": "string"
      }
    }
  },
  "Requests.V2.Rating.SuretyRatingsAggRequest": {
    "required": [
      "ids"
    ],
    "type": "object",
    "properties": {
      "ids": {
        "description": "(обязательный) Список идентификаторов инструментов",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "aggType": {
        "description": "(необязательный) Идентификатор типа агрегата. Допустимые значения: MIN, MAX. По умолчанию MAX.",
        "type": "string"
      },
      "companyName": {
        "description": "(необязательный) Тип наименования компании, выводимого в поле company_name. Возможные значения:\r\n\"SHORTNAME_RUS\"\r\n\"FULLNAME_RUS\"\r\n\"SHORTNAME_ENG\"\r\n\"FULLNAME_ENG\"\r\n\"SHORTNAME_RUS_NRD\"\r\n\"FULLNAME_RUS_NRD\"\r\n\"SHORTNAME_ENG_NRD\"\r\n\"FULLNAME_ENG_NRD\"\r\n\"SHORTNAME_RUS_SPARK\"\r\n\"FULLNAME_RUS_SPARK\"\r\n\"SHORTNAME_ENG_SPARK\"\r\n\"FULLNAME_ENG_SPARK\"",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "(необязательный) Дата рейтингов. Если не задано, используется текущая дата.",
        "type": "string"
      }
    }
  },
  "Rating.SuretyRatingsAggFields": {
    "type": "object",
    "properties": {
      "agg_type": {
        "description": "Идентификатор агрегата",
        "type": "string"
      },
      "dt": {
        "description": "Дата расчета",
        "type": "string"
      },
      "agg_l5": {
        "description": "Значение агрегата по шкале L5",
        "type": "string"
      },
      "agg_n5": {
        "description": "Числовое значение агрегата по шкале L5",
        "type": "string"
      },
      "agg_l12": {
        "description": "Значение агрегата по шкале L12",
        "type": "string"
      },
      "agg_n12": {
        "description": "Числовое значение агрегата по шкале L12",
        "type": "string"
      },
      "agg_l26": {
        "description": "Значение агрегата по шкале L26",
        "type": "string"
      },
      "agg_n26": {
        "description": "Числовое значение агрегата по шкале L26",
        "type": "string"
      },
      "id_rating": {
        "description": "Идентификатор рейтинга",
        "type": "string"
      },
      "last_dt": {
        "description": "Дата рейтингового действия",
        "type": "string"
      },
      "last": {
        "description": "Значение рейтинга",
        "type": "string"
      },
      "code": {
        "description": "Идентификатор компании",
        "type": "string"
      },
      "code_type": {
        "description": "Тип идентификатора компании",
        "type": "string"
      },
      "company_name": {
        "description": "Наименование компании",
        "type": "string"
      },
      "fintoolid": {
        "description": "Идентификатор финансового инструмента в базе Интерфакс",
        "type": "string"
      },
      "agg_n10": {
        "description": "Значение агрегата по шкале L10",
        "type": "string"
      },
      "agg_l10": {
        "description": "Значение агрегата по шкале L10",
        "type": "string"
      }
    }
  },
  "Requests.V2.Rating.SuretyRatingsAggV2Request": {
    "required": [
      "ids"
    ],
    "type": "object",
    "properties": {
      "ids": {
        "description": "(обязательный) Список идентификаторов инструментов",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "aggType": {
        "description": "(необязательный) Идентификатор типа агрегата. Допустимые значения: MIN, MAX. По умолчанию MAX.",
        "type": "string"
      },
      "companyName": {
        "description": "(необязательный) Тип наименования компании, выводимого в поле company_name. Возможные значения:\r\n\"SHORTNAME_RUS\"\r\n\"FULLNAME_RUS\"\r\n\"SHORTNAME_ENG\"\r\n\"FULLNAME_ENG\"\r\n\"SHORTNAME_RUS_NRD\"\r\n\"FULLNAME_RUS_NRD\"\r\n\"SHORTNAME_ENG_NRD\"\r\n\"FULLNAME_ENG_NRD\"\r\n\"SHORTNAME_RUS_SPARK\"\r\n\"FULLNAME_RUS_SPARK\"\r\n\"SHORTNAME_ENG_SPARK\"\r\n\"FULLNAME_ENG_SPARK\"",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "(необязательный) Дата рейтингов. Если не задано, используется текущая дата.",
        "type": "string"
      },
      "usingType": {
        "description": "(Необязательный, действует только на российские компании) \r\nВариант использования иностранных и российских рейтингов. Допустимые значения: Rus/Big3/Composite. \r\nПо умолчанию Rus – используются только российские рейтинги. \r\nBig3 – используются только иностранные рейтинги. \r\nComposite – при отсутствии российских рейтингов у российской компании использовать рейтинги иностранных рейтинговых агентств, но значение приводить к шкале для российских субъектов по таблице соответствия.",
        "type": "string"
      },
      "priorityRA": {
        "description": "(Необязательный, действует только на российские компании) \r\nПриоритетное российское рейтинговое агентство. Допустимые значения: AKRA/MAX. \r\nПо умолчанию AKRA – при прочих равных показываем рейтинги АКРА. RAEX показываем, только если рейтингов от АКРА нет совсем. \r\nMAX – показываем АКРА, RAEX показываем, только если он лучше.",
        "type": "string"
      }
    }
  },
  "Requests.V2.Reuters.EndOfDayRequest": {
    "required": [
      "code"
    ],
    "type": "object",
    "properties": {
      "code": {
        "description": "Список идентификаторов бумаг (ISIN или RIC) через запятую;",
        "type": "string"
      },
      "fields": {
        "description": "Список требуемых полей (см.метод Fields при templates=’EOD’)",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "tradeSite": {
        "description": "Код биржи",
        "type": "string"
      },
      "reuters_login": {
        "description": "Логин доступа к данным TRDSS",
        "type": "string"
      },
      "reuters_password": {
        "description": "Пароль доступа к данным TRDSS",
        "type": "string"
      }
    }
  },
  "Reuters.EndOfDayFields": {
    "type": "object",
    "properties": {
      "accruedint": {
        "format": "double",
        "type": "number"
      },
      "ask": {
        "format": "double",
        "type": "number"
      },
      "avgE_PRCE": {
        "format": "double",
        "type": "number"
      },
      "bid": {
        "format": "double",
        "type": "number"
      },
      "buybackdate": {
        "type": "string"
      },
      "buybackprice": {
        "type": "string"
      },
      "chng": {
        "type": "string"
      },
      "chnG_M": {
        "type": "string"
      },
      "chnG_M_PCT": {
        "type": "string"
      },
      "chnG_PCT": {
        "type": "string"
      },
      "chnG_W": {
        "type": "string"
      },
      "chnG_W_PCT": {
        "type": "string"
      },
      "chnG_Y_PCT": {
        "type": "string"
      },
      "close": {
        "type": "string"
      },
      "convexity": {
        "format": "double",
        "type": "number"
      },
      "deaL_ACC": {
        "type": "string"
      },
      "duratioN_N": {
        "format": "double",
        "type": "number"
      },
      "exch": {
        "type": "string"
      },
      "facevalue": {
        "type": "string"
      },
      "high": {
        "type": "string"
      },
      "isin": {
        "type": "string"
      },
      "issuer": {
        "type": "string"
      },
      "last": {
        "format": "double",
        "type": "number"
      },
      "lasT_TIME": {
        "type": "string"
      },
      "lasT_YIELD": {
        "format": "double",
        "type": "number"
      },
      "lclose": {
        "type": "string"
      },
      "lotsize": {
        "type": "string"
      },
      "low": {
        "type": "string"
      },
      "maT_DATE": {
        "format": "date-time",
        "type": "string"
      },
      "name": {
        "type": "string"
      },
      "open": {
        "format": "double",
        "type": "number"
      },
      "opeN_INST": {
        "type": "string"
      },
      "pvbp": {
        "format": "double",
        "type": "number"
      },
      "seccode": {
        "type": "string"
      },
      "secnamE_E": {
        "type": "string"
      },
      "sector": {
        "type": "string"
      },
      "shortnamE_ENG": {
        "type": "string"
      },
      "spread": {
        "format": "double",
        "type": "number"
      },
      "status": {
        "format": "double",
        "type": "number"
      },
      "tradecur": {
        "type": "string"
      },
      "vaL_ACC": {
        "type": "string"
      },
      "voL_ACC": {
        "format": "double",
        "type": "number"
      },
      "yielD_AGG": {
        "format": "double",
        "type": "number"
      },
      "yielD_ASK": {
        "format": "double",
        "type": "number"
      },
      "yielD_BID": {
        "format": "double",
        "type": "number"
      },
      "yielD_CHNG": {
        "format": "double",
        "type": "number"
      },
      "yielD_PREV": {
        "format": "double",
        "type": "number"
      }
    }
  },
  "Reuters.ReutersField": {
    "type": "object",
    "properties": {
      "field": {
        "type": "string"
      },
      "value": {
        "type": "object"
      },
      "valueType": {
        "type": "string"
      }
    }
  },
  "Requests.V2.Reuters.FieldsRequest": {
    "required": [
      "template"
    ],
    "type": "object",
    "properties": {
      "template": {
        "description": "(Обязательный) Идентификатор шаблона данных. Возможные значения:\r\n‘TNC’ – список полей, возвращаемых методом FintoolRefData\r\n‘EOD’ – список полей, возвращаемых методом EndOfDay",
        "type": "string"
      },
      "filter": {
        "description": "(Необязательный) Строка фильтрации.",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "Reuters.FieldsFields": {
    "type": "object",
    "properties": {
      "template_code": {
        "type": "string"
      },
      "field_code": {
        "type": "string"
      },
      "fullname_eng": {
        "type": "string"
      },
      "description": {
        "type": "string"
      },
      "rudata_method": {
        "type": "string"
      },
      "rudata_field": {
        "type": "string"
      }
    }
  },
  "Requests.V2.Reuters.FintoolRefDataRequest": {
    "required": [
      "isin"
    ],
    "type": "object",
    "properties": {
      "isin": {
        "description": "Список идентификаторов бумаг (ISIN)",
        "type": "string"
      },
      "fields": {
        "description": "Список требуемых полей (см. метод Fields при templates=’TNC’);",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "is_original_fields": {
        "description": "1 – использовать оригинальные коды полей TRDSS \r\n0 или пусто – использовать коды полей RUData; в том числе в качестве значений параметра fields;",
        "type": "boolean"
      },
      "reuters_login": {
        "description": "Логин доступа к данным TRDSS",
        "type": "string"
      },
      "reuters_password": {
        "description": "Пароль доступа к данным TRDSS",
        "type": "string"
      }
    }
  },
  "Reuters.FintoolRefDataFields": {
    "type": "object",
    "properties": {
      "amortisedMty": {
        "type": "string"
      },
      "basis": {
        "type": "string"
      },
      "begDistDate": {
        "format": "date-time",
        "type": "string"
      },
      "bondSeries": {
        "type": "string"
      },
      "cfi": {
        "type": "string"
      },
      "country": {
        "type": "string"
      },
      "couponPerYear": {
        "format": "double",
        "type": "number"
      },
      "couponType": {
        "type": "string"
      },
      "couponTypeName_NRD": {
        "type": "string"
      },
      "depositary_NRD": {
        "type": "string"
      },
      "endDistDate": {
        "format": "date-time",
        "type": "string"
      },
      "endMtyDate": {
        "format": "date-time",
        "type": "string"
      },
      "faceFTName": {
        "type": "string"
      },
      "faceValue": {
        "format": "double",
        "type": "number"
      },
      "finToolType": {
        "type": "string"
      },
      "firstCouponDate_NRD": {
        "format": "date-time",
        "type": "string"
      },
      "haveOffer": {
        "type": "string"
      },
      "isinCode": {
        "type": "string"
      },
      "isConvertible": {
        "type": "string"
      },
      "isGuaranteed": {
        "type": "string"
      },
      "issuerName": {
        "type": "string"
      },
      "issuerSector": {
        "type": "string"
      },
      "placePrice_NRD": {
        "format": "double",
        "type": "number"
      },
      "privateDist": {
        "type": "string"
      },
      "securityKind": {
        "type": "string"
      },
      "securityType": {
        "type": "string"
      },
      "status": {
        "type": "string"
      },
      "sumIssueVal": {
        "format": "double",
        "type": "number"
      },
      "sumMarketVal": {
        "format": "double",
        "type": "number"
      }
    }
  },
  "Requests.V2.Risk.LiquidityAdjustment2Request": {
    "required": [
      "id"
    ],
    "type": "object",
    "properties": {
      "id": {
        "description": "instrument id",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "calculation date",
        "type": "string"
      }
    }
  },
  "Risk.LiquidityAdjustmentResponse": {
    "description": "Liquidity adjustment V2",
    "type": "object",
    "properties": {
      "id": {
        "type": "string"
      },
      "mean_Omega": {
        "format": "decimal(8,4)",
        "type": "number"
      },
      "face_value": {
        "format": "decimal(20,8)",
        "type": "number"
      },
      "currency": {
        "type": "string"
      },
      "currency_rate": {
        "format": "decimal(38,10)",
        "type": "number"
      },
      "formula": {
        "type": "string"
      },
      "formula_ID": {
        "format": "int32",
        "type": "integer"
      },
      "error": {
        "type": "string"
      }
    }
  },
  "Requests.V2.Risk.AmortisationsRequest": {
    "required": [
      "isin"
    ],
    "type": "object",
    "properties": {
      "isin": {
        "description": "ISIN (обязательный)",
        "type": "string"
      },
      "currentOnly": {
        "type": "boolean"
      },
      "offerEnable": {
        "type": "boolean"
      },
      "date": {
        "format": "date-time",
        "type": "string"
      },
      "groupByPeriods": {
        "type": "boolean"
      },
      "edition": {
        "type": "string"
      },
      "partsAsPct": {
        "description": "Значения погашаемых долей: true - в %, false - в долях (% * 0.01)",
        "type": "boolean"
      }
    }
  },
  "Risk.AmortisationsResponse": {
    "type": "object",
    "properties": {
      "dates": {
        "description": "Список дат погашений",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "format": "date-time",
          "type": "string"
        }
      },
      "parts": {
        "description": "Список погашаемых долей",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "format": "double",
          "type": "number"
        }
      },
      "error": {
        "description": "Текст ошибки, если она есть",
        "type": "string"
      }
    }
  },
  "Requests.V2.Risk.AmortisationsRequestById": {
    "required": [
      "fintoolId"
    ],
    "type": "object",
    "properties": {
      "fintoolId": {
        "format": "int64",
        "description": "fintoolId (обязательный)",
        "type": "integer"
      },
      "currentOnly": {
        "type": "boolean"
      },
      "offerEnable": {
        "type": "boolean"
      },
      "date": {
        "format": "date-time",
        "type": "string"
      },
      "groupByPeriods": {
        "type": "boolean"
      },
      "edition": {
        "type": "string"
      },
      "partsAsPct": {
        "description": "Значения погашаемых долей: true - в %, false - в долях (% * 0.01)",
        "type": "boolean"
      }
    }
  },
  "Requests.V2.Risk.BankNormRuleRequest": {
    "required": [
      "isin",
      "date"
    ],
    "type": "object",
    "properties": {
      "isin": {
        "description": "ISIN (обязательный)",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата (обязательный)",
        "type": "string"
      },
      "funding": {
        "description": "1 – фондирование в валюте номинала. По умолчанию 0.",
        "type": "boolean"
      },
      "useFrozenDates": {
        "description": "Флаг использвания даты \"заморозки\" рейтингов",
        "type": "boolean"
      },
      "bankNormEdition": {
        "description": "Парметры инструкций ЦБ РФ (139-И, 180-И, 180-И/2018, 180-И/2019)",
        "type": "string"
      },
      "positionOpenDate": {
        "format": "date-time",
        "description": "Дата открытия (покупки) позиции",
        "type": "string"
      }
    }
  },
  "Risk.BankNormRuleResponse": {
    "type": "object",
    "properties": {
      "rule": {
        "description": "Идентификатор правила",
        "type": "string"
      },
      "nonGarantRule": {
        "description": "Правило классификации актива для негарантированной части выпуска.",
        "type": "string"
      },
      "error": {
        "description": "Текст ошибки, если она есть",
        "type": "string"
      },
      "ruleCoef": {
        "format": "decimal(2,1)",
        "type": "number"
      },
      "nonGarantRuleCoef": {
        "format": "decimal(2,1)",
        "type": "number"
      }
    }
  },
  "Requests.V2.Risk.CapitalAdequacyParamsRequest": {
    "required": [
      "id",
      "date"
    ],
    "type": "object",
    "properties": {
      "id": {
        "description": "Идентификатор инструмента – ISIN (обязательный)",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата расчета (обязательный)",
        "type": "string"
      },
      "useFrozenDates": {
        "description": "Флаг заморозки рейтингов (необязательный)",
        "type": "boolean"
      },
      "cbrInstructions": {
        "description": "Параметры инструкций ЦБ РФ:\r\n- vlaEdition - для положений \"Положение о порядке расчета показателя краткосрочной ликвидности\"\r\n- marketRiskEdition - для положений \"О порядке расчета кредитными организациями величины рыночного риска\"\r\n- bankNormEdition - для положений \"Об обязательных нормативах банков\"",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Requests.V2.NameValuePair"
        }
      },
      "positionOpenDate": {
        "format": "date-time",
        "description": "Дата открытия (покупки) позиции",
        "type": "string"
      }
    }
  },
  "Requests.V2.NameValuePair": {
    "type": "object",
    "properties": {
      "name": {
        "type": "string"
      },
      "value": {
        "type": "string"
      }
    }
  },
  "Risk.CapitalAdequacyResponse": {
    "description": "Classification of the instrument regarding the capital adequacy normativ",
    "type": "object",
    "properties": {
      "idDoc": {
        "format": "int64",
        "description": "Идентификатор инструкции, действующей на дату расчета",
        "type": "integer"
      },
      "docShortName": {
        "description": "Краткое наименование инструкции (например, «139-И»)",
        "type": "string"
      },
      "repoDiscount": {
        "format": "decimal(5,4)",
        "description": "Дисконт для расчета риска по операциям РЕПО",
        "type": "number"
      },
      "rules": {
        "description": "Mассив объектов класса CARule",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Risk.CARule"
        }
      },
      "error": {
        "description": "Текст ошибки, если она произошла",
        "type": "string"
      }
    }
  },
  "Risk.CARule": {
    "type": "object",
    "properties": {
      "ruleType": {
        "format": "int32",
        "description": "Тип классификатора. Возможные значения:\r\n0 – гарантированная часть выпуска при фондировании в рублях\r\n1 – негарантированная часть выпуска при фондировании в рублях\r\n2 – гарантированная часть выпуска при фондировании не в рублях\r\n3 – негарантированная часть выпуска при фондировании не в рублях",
        "type": "integer"
      },
      "ruleTypeName": {
        "description": "“Расшифровка” значения RuleType в стороку:\r\n0 – “GARANT_RUB”\r\n1 – “NOGARANT_RUB”\r\n2 – “GARANT_NOTRUB”\r\n3 – “NOGARANT_NOTRUB",
        "type": "string"
      },
      "rule": {
        "description": "Значение классификатора",
        "type": "string"
      },
      "creditRiskRatio": {
        "format": "double",
        "description": "Коэффициент кредитного риска. Может быть NULL.",
        "type": "number"
      },
      "riskGroup": {
        "description": "Группа риска",
        "type": "string"
      },
      "reason": {
        "description": "Обоснование (ссылка на абзац из инструкции)",
        "type": "string"
      },
      "code": {
        "description": "Код по инструкции",
        "type": "string"
      }
    }
  },
  "Requests.V2.Risk.CouponYieldRequest": {
    "required": [
      "id",
      "date"
    ],
    "type": "object",
    "properties": {
      "id": {
        "description": "Идентификатор инструмента",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата расчета риска",
        "type": "string"
      },
      "edition": {
        "description": "Редакция положения ЦБ:\r\n«387-П» или «511-П»",
        "type": "string"
      }
    }
  },
  "Risk.CouponYieldResponse": {
    "type": "object",
    "properties": {
      "value": {
        "format": "decimal(25,8)",
        "description": "Значение доходности",
        "type": "number"
      },
      "error": {
        "description": "Текст ошибки, если она есть",
        "type": "string"
      }
    }
  },
  "Requests.V2.Risk.EquityRiskRateRequest": {
    "required": [
      "isin"
    ],
    "type": "object",
    "properties": {
      "isin": {
        "description": "ISIN (обязательный)",
        "type": "string"
      },
      "edition": {
        "type": "string"
      }
    }
  },
  "Risk.EquityRiskRateResponse": {
    "type": "object",
    "properties": {
      "riskRate": {
        "format": "decimal(1,2)",
        "description": "Коэффициент риска",
        "type": "number"
      },
      "error": {
        "description": "Текст ошибки, если она есть",
        "type": "string"
      }
    }
  },
  "Requests.V2.Risk.FairValueRequest": {
    "required": [
      "symbol",
      "date"
    ],
    "type": "object",
    "properties": {
      "symbol": {
        "description": "Обязательный параметр. Инструмент задается числовым или строковым кодом – это может быть ID_ISS, ISIN, TradeCode, EfirCode",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Обязательный параметр. Дата расчета текущей справедливой стоимости (ТСС). Может задаваться ячейкой с датой либо строкой в формате \"DD.MM.YYYY\".",
        "type": "string"
      },
      "priceType": {
        "description": "Тип цены\r\nAny или пустое значение - по умолчанию\r\nMarket – рыночная\r\nClose – цена закрытия\r\nAvgPrice – средневзвешенная",
        "type": "string"
      },
      "isCloseRegister": {
        "description": "true – учитывать даты закрытия реестра перед выплатой купона/амортизации.\r\nfalse – (по умолчанию) не учитывать даты закрытия реестра. В этом случае будут использоваться, соответственно,  даты начала и конца купонного периода, а также дата амортизации.",
        "type": "boolean"
      },
      "isPercent": {
        "description": "true – функция возвращает справедливую стоимость в процентах к номиналу. Применимо только к облигациям.\r\nfalse – (по умолчанию) функция возвращает справедливую стоимость в валюте номинала.",
        "type": "boolean"
      },
      "ignoreAccruedInt": {
        "description": "true – не учитывать НКД для облигаций;\r\nfalse – (по умолчанию) учитывать НКД для облигаций.",
        "type": "boolean"
      },
      "depth": {
        "format": "int32",
        "description": "Глубина поиска, выраженная в днях.  Значение по умолчанию: 90. Если Depth=0, поиск цены будет идти только в рамках указанной даты",
        "type": "integer"
      }
    }
  },
  "Risk.FairValueResponse": {
    "type": "object",
    "properties": {
      "value": {
        "format": "decimal(38,10)",
        "description": "Цена",
        "type": "number"
      },
      "percValue": {
        "format": "decimal(38,10)",
        "description": "Цена в процентах",
        "type": "number"
      },
      "error": {
        "description": "Текст ошибки, если она есть",
        "type": "string"
      },
      "warning": {
        "description": "Текст предупреждения, если оно есть",
        "type": "string"
      },
      "accruedInterest": {
        "format": "decimal(38,10)",
        "description": "НКД",
        "type": "number"
      },
      "percAccruedInterest": {
        "format": "decimal(38,10)",
        "description": "НКД",
        "type": "number"
      },
      "residualFaceValue": {
        "format": "decimal(20,8)",
        "description": "Остаточный номинал",
        "type": "number"
      },
      "percResidualFaceValue": {
        "format": "decimal(38,10)",
        "description": "Остаточный номинал",
        "type": "number"
      }
    }
  },
  "Requests.V2.Risk.FintoolsRiskGroupParamsRequest": {
    "required": [
      "fintoolIdList",
      "date"
    ],
    "type": "object",
    "properties": {
      "fintoolIdList": {
        "description": "Список fintoolId инструментов",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "format": "int64",
          "type": "integer"
        }
      },
      "date": {
        "format": "date-time",
        "description": "Дата параметров",
        "type": "string"
      },
      "params": {
        "description": "Необязательный список параметов",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    }
  },
  "Risk.FintoolsRiskGroupParams": {
    "type": "object",
    "properties": {
      "fintoolId": {
        "format": "int64",
        "description": "fintoolId инструмента",
        "type": "integer"
      },
      "params": {
        "description": "Список параметров",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Risk.FintoolsRiskGroupParamsFields"
        }
      },
      "error": {
        "description": "Описание ошибки",
        "type": "string"
      }
    }
  },
  "Risk.FintoolsRiskGroupParamsFields": {
    "type": "object",
    "properties": {
      "param_name": {
        "description": "Имя параметра",
        "maxLength": 256,
        "type": "string"
      },
      "param": {
        "description": "Значение параметра",
        "type": "object"
      }
    }
  },
  "Requests.V2.Risk.FrozenRiskGroupParamRequest": {
    "required": [
      "isin"
    ],
    "type": "object",
    "properties": {
      "isin": {
        "type": "string"
      }
    }
  },
  "Risk.FrozenRiskParam": {
    "type": "object",
    "properties": {
      "riskParamName": {
        "type": "string"
      },
      "noBankValue": {
        "type": "string"
      },
      "bankValue": {
        "type": "string"
      }
    }
  },
  "Requests.V2.Risk.InfoShocksRequest": {
    "required": [
      "ids"
    ],
    "type": "object",
    "properties": {
      "ids": {
        "description": "Список fintoolId инструментов",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "format": "int64",
          "type": "integer"
        }
      },
      "dateFrom": {
        "format": "date-time",
        "description": "Начало периода",
        "type": "string"
      },
      "dateTo": {
        "format": "date-time",
        "description": "Конец периода",
        "type": "string"
      },
      "minDuration": {
        "format": "double",
        "description": "Минимальная дюрация",
        "type": "number"
      },
      "shareLastKnown": {
        "description": "Использовать данные рисков по акциям за последний расчитанный день",
        "type": "boolean"
      }
    }
  },
  "Risk.InfoShocksFields": {
    "type": "object",
    "properties": {
      "fintoolid": {
        "format": "int64",
        "description": "FintoolId инструмента",
        "type": "integer"
      },
      "begin_date_price": {
        "format": "double",
        "description": "Цена последней сделки на начало периода",
        "type": "number"
      },
      "begin_date": {
        "format": "date-time",
        "description": "Дата цены последней сделки на начало периода",
        "type": "string"
      },
      "end_date_price": {
        "format": "double",
        "description": "Цена последней сделки на конец периода",
        "type": "number"
      },
      "end_date": {
        "format": "date-time",
        "description": "Дата цены последней сделки на конец периода",
        "type": "string"
      },
      "price_change_pct": {
        "format": "double",
        "description": "Изменение цены последней сделки по сравнению с началом периода в %",
        "type": "number"
      },
      "index_iss_id": {
        "format": "int64",
        "description": "IssId базового индекса",
        "type": "integer"
      },
      "index_name": {
        "description": "Имя базового индекса",
        "type": "string"
      },
      "index_change_pct": {
        "format": "double",
        "description": "Изменение значения базового индекса в %",
        "type": "number"
      },
      "sensitivity_coeff": {
        "format": "double",
        "description": "Коэффициент чувствительности к индексу",
        "type": "number"
      },
      "explained_change_pct": {
        "format": "double",
        "description": "Объясненные изменения цены в %",
        "type": "number"
      },
      "price_shock_pct": {
        "format": "double",
        "description": "Ценовой шок в %",
        "type": "number"
      },
      "errors": {
        "description": "Описание ошибок расчета",
        "type": "string"
      }
    }
  },
  "Requests.V2.Risk.InstrumentHasRiskRequest": {
    "required": [
      "isin",
      "date",
      "riskType"
    ],
    "type": "object",
    "properties": {
      "isin": {
        "description": "ISIN (обязательный)",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата",
        "type": "string"
      },
      "riskType": {
        "description": "Percent – процентный\r\nFond – фондовый\r\nCommodity – товарный\r\nCurrency – валютный",
        "type": "string"
      },
      "edition": {
        "type": "string"
      }
    }
  },
  "Risk.HasRiskResponse": {
    "type": "object",
    "properties": {
      "hasRisk": {
        "description": "Флаг наличия запрашиваемого риска",
        "type": "boolean"
      },
      "error": {
        "description": "Текст ошибки, если она есть",
        "type": "string"
      },
      "hasRiskValue": {
        "format": "int32",
        "description": "Атрибут запрашиваемого риска:\r\n0 – риск отсутствует\r\n1 – риск присутствует, секьюритизация отсутствует\r\n2 – первичная секьюритизация\r\n3 – вторичная секьюритизация",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Risk.LiquidityAdjustmentRequest": {
    "required": [
      "ids"
    ],
    "type": "object",
    "properties": {
      "ids": {
        "description": "(Обязательный) Cписок идентификаторов инструментов (ISIN / гос.рег.номер / код НРД / идентификатор инструмента в базе ФинМаркет FintoolId).",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "date": {
        "format": "date-time",
        "description": "(Необязательный) Дата расчёта. Если не задано, используется текущая дата.",
        "type": "string"
      }
    }
  },
  "Risk.LiquidityAdjustmentFields": {
    "type": "object",
    "properties": {
      "id": {
        "description": "Идентификатор входного инструмента",
        "type": "string"
      },
      "adj_liq_n": {
        "format": "decimal(38,20)",
        "description": "Вычисленный коэффициент корректировки ликвидности на заданную дату",
        "type": "number"
      },
      "adj_liq": {
        "format": "decimal(38,20)",
        "description": "Произведение полученного значения ADJ_LIQ и FACEVALUE - номинал на дату эмиссии",
        "type": "number"
      },
      "dt": {
        "format": "date-time",
        "description": "Дата расчета",
        "type": "string"
      }
    }
  },
  "Requests.V2.Risk.LiquidityParamsRequest": {
    "required": [
      "id",
      "date",
      "operation"
    ],
    "type": "object",
    "properties": {
      "id": {
        "description": "Идентификатор инструмента (ISIN, регистрационный номер)",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата расчета",
        "type": "string"
      },
      "operation": {
        "format": "int32",
        "description": "Направление операции:\r\n1 – покупка (Buy)\r\n-1 – продажа (Sell)",
        "type": "integer"
      }
    }
  },
  "Risk.LiquidityParamsFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int64",
        "description": "Идентификатор торгового инструмента. См. метод /Info/Securities.",
        "type": "integer"
      },
      "operation": {
        "format": "decimal(1,0)",
        "description": "Направление операции. Равно входному параметру operation.",
        "type": "number"
      },
      "omega": {
        "format": "decimal(25,8)",
        "description": "Экспоненциальное среднее логарифма объема, который надо купить/продать для сдвига цены на минимальный шаг",
        "type": "number"
      },
      "ro": {
        "format": "decimal(25,8)",
        "description": "Экспоненциальное среднее разности между оценкой лучшей цены покупки/продажи, рассчитанной по модели, и фактическим значением лучшей цены",
        "type": "number"
      },
      "gamma": {
        "format": "decimal(25,8)",
        "description": "Экспоненциальное среднее стандартной ошибки модели",
        "type": "number"
      },
      "volmax": {
        "format": "decimal(38,8)",
        "description": "Максимальный объем покупки/продажи, для которого применима модель оценки сдвига цены",
        "type": "number"
      }
    }
  },
  "Requests.V2.Risk.LiquidityRatingRequest": {
    "required": [
      "ids"
    ],
    "type": "object",
    "properties": {
      "ids": {
        "description": "(обязательный) Список идентификаторов инструментов (ISIN / гос. рег. номер / код НРД / идентификатор инструмента в базе ФинМаркет FintoolId)",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "date": {
        "format": "date-time",
        "description": "(необязательный) Дата расчёта в формате. Если не задано, используется текущая дата.",
        "type": "string"
      }
    }
  },
  "Risk.LiquidityRatingFields": {
    "type": "object",
    "properties": {
      "id": {
        "description": "Идентификатор инструмента",
        "type": "string"
      },
      "isincode": {
        "description": "ISIN-код выпуска облигаций, присваивается НДЦ",
        "type": "string"
      },
      "regcode": {
        "description": "Регистрационный номер выпуска облигаций",
        "type": "string"
      },
      "nrdcode": {
        "description": "Код НРД выпуска облигаций, присваивается НРД",
        "type": "string"
      },
      "nickname": {
        "description": "Краткое название облигации на русском языке",
        "type": "string"
      },
      "fullname": {
        "description": "Полное название выпуска облигации на русском языке",
        "type": "string"
      },
      "liqrt": {
        "description": "Рейтинг ликвидности: L1 … L7",
        "type": "string"
      },
      "mdepthcoef": {
        "format": "decimal(8,4)",
        "description": "Коэффициент \"глубины\" рынка",
        "type": "number"
      },
      "omegabid": {
        "format": "decimal(25,8)",
        "description": "Значение экспоненциального среднего от логарифма объема, который нужно купить/продать для сдвига цены на минимальный шаг, при коэффициенте усреднения 0.94",
        "type": "number"
      },
      "gammabid": {
        "format": "decimal(25,8)",
        "description": "Значение экспоненциального среднего стандартной ошибки модели при коэффициенте усреднения 0.94",
        "type": "number"
      },
      "hhi": {
        "format": "decimal(16,8)",
        "description": "Индекс Херфиндаля-Хиршмана для структуры владения облигацией",
        "type": "number"
      },
      "ind_liq": {
        "format": "decimal(16,8)",
        "description": "Индекс ликвидности, показывающий средний уровень значения индекса Херфиндаля-Хиршмана в портфеле «типичного» инвестора данной облигации",
        "type": "number"
      },
      "ind_unliq": {
        "format": "decimal(16,8)",
        "description": "Индекс ликвидности, показывающий средний уровень для неликвидных бумаг в портфеле «типичного» инвестора данной облигации",
        "type": "number"
      },
      "activ_m2": {
        "format": "decimal(16,8)",
        "description": "Активность торгов",
        "type": "number"
      },
      "summarketvol": {
        "format": "decimal(20,4)",
        "description": "Объём выпуска в валюте номинала на указанную дату",
        "type": "number"
      },
      "theta": {
        "format": "decimal(2,2)",
        "description": "Доверительная вероятность, константа, равна 0.95",
        "type": "number"
      },
      "mu": {
        "format": "decimal(2,1)",
        "description": "Допустимая погрешность оценки цены (μ), константа, равна 1.5",
        "type": "number"
      },
      "nickname_eng": {
        "description": "Краткое название облигации на английском языке",
        "type": "string"
      },
      "fullname_eng": {
        "description": "Полное название выпуска облигации на английском языке",
        "type": "string"
      },
      "dt": {
        "format": "date-time",
        "description": "Дата расчета",
        "type": "string"
      },
      "fintoolid": {
        "format": "int64",
        "description": "Идентификатор текущего инструмента в базе ФинМаркет",
        "type": "integer"
      },
      "sigmabid": {
        "format": "decimal(25,8)",
        "description": "",
        "type": "number"
      },
      "mubid": {
        "format": "decimal(25,8)",
        "type": "number"
      },
      "issue_vol": {
        "format": "decimal(20,4)",
        "type": "number"
      },
      "activ_m3": {
        "format": "decimal(16,8)",
        "type": "number"
      },
      "duration": {
        "format": "decimal(16,8)",
        "type": "number"
      },
      "omega": {
        "format": "decimal(3,2)",
        "type": "number"
      },
      "nrd_trueprice_pct": {
        "format": "decimal(16,8)",
        "type": "number"
      },
      "k_theta": {
        "format": "decimal(10,9)",
        "type": "number"
      },
      "fintool_type": {
        "type": "string"
      },
      "currency": {
        "type": "string"
      },
      "method": {
        "type": "string"
      },
      "method_id": {
        "format": "decimal(1,0)",
        "type": "number"
      },
      "ro": {
        "format": "decimal(25,8)",
        "type": "number"
      },
      "volMax": {
        "format": "decimal(38,8)",
        "type": "number"
      },
      "l_date": {
        "format": "date-time",
        "type": "string"
      }
    }
  },
  "Requests.V2.Risk.MarketRiskDataRequest": {
    "required": [
      "ids",
      "calcDate"
    ],
    "type": "object",
    "properties": {
      "ids": {
        "description": "Список идентификаторов (ISIN, регистрационный номер)",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "calcDate": {
        "format": "date-time",
        "description": "Дата расчета",
        "type": "string"
      },
      "offerEnable": {
        "description": "Учитывать оферты",
        "type": "boolean"
      },
      "useFrozenDates": {
        "description": "Использовать даты рейтингов",
        "type": "boolean"
      },
      "edition": {
        "description": "Редакция инструкции ЦБ («387-П» или «511-П»)",
        "type": "string"
      },
      "bBCountry": {
        "description": "Двухбуквенный код страны филиала банка (Alfa-2), например, KZ, по умолчанию = RU",
        "type": "string"
      },
      "cbrInstructions": {
        "description": "Параметры инструкций ЦБ РФ:\r\n- vlaEdition - для положений \"Положение о порядке расчета показателя краткосрочной ликвидности\"\r\n- marketRiskEdition - для положений \"О порядке расчета кредитными организациями величины рыночного риска\"\r\n- bankNormEdition - для положений \"Об обязательных нормативах банков\"",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Requests.V2.NameValuePair"
        }
      },
      "positionOpenDate": {
        "format": "date-time",
        "description": "Дата открытия (покупки) позиции",
        "type": "string"
      }
    }
  },
  "Risk.MarketRiskDataFields": {
    "type": "object",
    "properties": {
      "id": {
        "description": "Идентификатор инстумента (ISIN, регистрационный номер)",
        "type": "string"
      },
      "error": {
        "description": "Текст ошибки, если она есть",
        "type": "string"
      },
      "fintooltype": {
        "description": "Тип инструмента",
        "type": "string"
      },
      "issuer": {
        "description": "Эмитент",
        "type": "string"
      },
      "issubordinated": {
        "format": "int32",
        "description": "Признак субординированного выпуска",
        "type": "integer"
      },
      "ismatched": {
        "format": "int32",
        "description": "Признак сверки данных Интерфакс и НРД",
        "type": "integer"
      },
      "fintoolshortnamerus": {
        "description": "Краткое наименование бумаги (рус.)",
        "type": "string"
      },
      "fintoolfullnamerus": {
        "description": "Полное наименование бумаги (рус.)",
        "type": "string"
      },
      "guaranteedamountpct": {
        "format": "decimal(16,8)",
        "description": "Доля покрытия гарантией (%)",
        "type": "number"
      },
      "expirationdate": {
        "format": "date-time",
        "description": "Дата экспирации для фьючерсов и опционов",
        "type": "string"
      },
      "max30dloss": {
        "format": "decimal(16,8)",
        "description": "Максимальная просадка",
        "type": "number"
      },
      "hasamortisations": {
        "format": "int32",
        "description": "Признак выпуска с амортизацией",
        "type": "integer"
      },
      "nominalcurrency": {
        "description": "Валюта номинала",
        "type": "string"
      },
      "haspercentrisk": {
        "format": "int32",
        "description": "Наличие процентного риска",
        "type": "integer"
      },
      "hascommodityrisk": {
        "format": "int32",
        "description": "Наличие товарного риска",
        "type": "integer"
      },
      "hasfondrisk": {
        "format": "int32",
        "description": "Наличие фондового риска",
        "type": "integer"
      },
      "riskgroup_f0": {
        "format": "int32",
        "description": "Группа риска при отсутствии фондирования",
        "type": "integer"
      },
      "riskgroup_f1": {
        "format": "int32",
        "description": "Группа риска при наличии фондирования",
        "type": "integer"
      },
      "riskgrouprule_f0": {
        "description": "Правило группы риска при отсутствии фондирования",
        "type": "string"
      },
      "riskgrouprule_f1": {
        "description": "Правило группа риска при наличии фондирования",
        "type": "string"
      },
      "couponyield": {
        "format": "decimal(16,8)",
        "description": "Ставка купона",
        "type": "number"
      },
      "timinggroupdate": {
        "format": "date-time",
        "description": "Дата определения группы срочности",
        "type": "string"
      },
      "timinggrouprule": {
        "description": "Критерий группы срочности",
        "type": "string"
      },
      "duration_n": {
        "format": "decimal(16,8)",
        "description": "Модифицированная дюрация",
        "type": "number"
      },
      "convexity": {
        "format": "decimal(16,8)",
        "description": "Выпуклость",
        "type": "number"
      },
      "equityriskrate": {
        "format": "decimal(16,8)",
        "description": "Коэффициент группы риска",
        "type": "number"
      },
      "qualifier139_f0g0": {
        "description": "Классификатор по 139-И для части, фондированной в иностранной валюте и без гарантий",
        "type": "string"
      },
      "qualifier139_f0g1": {
        "description": "Классификатор по 139-И для гарантированной части, фондированной в иностранной валюте",
        "type": "string"
      },
      "qualifier139_f1g0": {
        "description": "Классификатор по 139-И для части, фондированной в рублях и без гарантий",
        "type": "string"
      },
      "qualifier139_f1g1": {
        "description": "Классификатор по 139-И для гарантированной части, фондированной в рублях",
        "type": "string"
      },
      "qualifier421": {
        "description": "Группа ВЛА на дату расчета",
        "type": "string"
      },
      "qualifier421_30": {
        "description": "Группа ВЛА на дату расчета минус 30 дней",
        "type": "string"
      },
      "daysafterbreakingrules421": {
        "format": "int64",
        "description": "Количество дней после выхода выпуска из группы ВЛА",
        "type": "integer"
      },
      "repodiscount139": {
        "format": "float",
        "description": "Величина дисконта для расчета риска по операциям РЕПО в соответствии с инструкцией 180 (139)-И",
        "type": "number"
      },
      "ismktprice": {
        "format": "int32",
        "description": "Наличие рыночной цены\r\n1 - для акций и облигаций на МБ\r\n2 - для акций на зарубежных биржах \r\n3 – для еврооблигаций",
        "type": "integer"
      },
      "ca_qualifier_f0g0": {
        "description": "Классификатор по 180 (139)-И для части, фондированной в иностранной валюте и без гарантий",
        "type": "string"
      },
      "ca_risk_group_f0g0": {
        "description": "Группа риска по 180 (139)-И для части, фондированной в иностранной валюте и без гарантий",
        "type": "string"
      },
      "ca_reason_f0g0": {
        "description": "Обоснование группы риска по 180 (139)-И для части, фондированной в иностранной валюте и без гарантий",
        "type": "string"
      },
      "ca_code_f0g0": {
        "description": "Код по 180 (139)-И для части, фондированной в иностранной валюте и без гарантий",
        "type": "string"
      },
      "ca_credit_risk_f0g0": {
        "format": "float",
        "description": "Коэффициент кредитного риска по 180 (139)-И для части, фондированной в иностранной валюте и без гарантий",
        "type": "number"
      },
      "ca_qualifier_f0g1": {
        "description": "Классификатор по 180 (139)-И для гарантированной части, фондированной в иностранной валюте",
        "type": "string"
      },
      "ca_risk_group_f0g1": {
        "description": "Группа риска по 180 (139)-И для гарантированной части, фондированной в иностранной валюте",
        "type": "string"
      },
      "ca_reason_f0g1": {
        "description": "Обоснование группы риска по 180 (139)-И для гарантированной части, фондированной в иностранной валюте",
        "type": "string"
      },
      "ca_code_f0g1": {
        "description": "Код по 180 (139)-И для гарантированной части, фондированной в иностранной валюте",
        "type": "string"
      },
      "ca_credit_risk_f0g1": {
        "format": "float",
        "description": "Коэффициент кредитного риска по 180 (139)-И для гарантированной части, фондированной в иностранной валюте",
        "type": "number"
      },
      "ca_qualifier_f1g0": {
        "description": "Классификатор по 180 (139)-И для части, фондированной в рублях и без гарантий",
        "type": "string"
      },
      "ca_risk_group_f1g0": {
        "description": "Группа риска по 180 (139)-И для части, фондированной в рублях и без гарантий",
        "type": "string"
      },
      "ca_reason_f1g0": {
        "description": "Обоснование группы риска по 180 (139)-И для части, фондированной в рублях и без гарантий",
        "type": "string"
      },
      "ca_code_f1g0": {
        "description": "Код по 180 (139)-И для части, фондированной в рублях и без гарантий",
        "type": "string"
      },
      "ca_credit_risk_f1g0": {
        "format": "float",
        "description": "Коэффициент кредитного риска по 180 (139)-И для части, фондированной в рублях и без гарантий",
        "type": "number"
      },
      "ca_qualifier_f1g1": {
        "description": "Классификатор по 180 (139)-И для гарантированной части, фондированной в рублях",
        "type": "string"
      },
      "ca_risk_group_f1g1": {
        "description": "Группа риска по 180 (139)-И для гарантированной части, фондированной в рублях",
        "type": "string"
      },
      "ca_reason_f1g1": {
        "description": "Обоснование группы риска по 180 (139)-И для гарантированной части, фондированной в рублях",
        "type": "string"
      },
      "ca_code_f1g1": {
        "description": "Код по 180 (139)-И для гарантированной части, фондированной в рублях",
        "type": "string"
      },
      "ca_credit_risk_f1g1": {
        "format": "float",
        "description": "Коэффициент кредитного риска по 180 (139)-И для гарантированной части, фондированной в рублях",
        "type": "number"
      },
      "ca_doc_id": {
        "format": "int64",
        "description": "Идентификатор нормативного документа",
        "type": "integer"
      },
      "ca_doc_shortname": {
        "description": "Краткое наименование нормативного документа(«180-И», «387-П» и т.п.).",
        "type": "string"
      },
      "duration": {
        "format": "int64",
        "description": "Дюрация",
        "type": "integer"
      },
      "pvbp": {
        "format": "decimal(16,8)",
        "description": "PVBP",
        "type": "number"
      },
      "yield_agg": {
        "format": "decimal(16,8)",
        "description": "Аггрегированная доходность",
        "type": "number"
      },
      "isnegotiability": {
        "format": "int32",
        "description": "Показатель обращаемости для целей учета налогообложения НДФЛ ЦБ\r\n1 - для акций и облигаций на МБ\r\n2 - для акций на зарубежных биржах\r\n3 – для еврооблигаций",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Risk.NominalCurrencyRequest": {
    "required": [
      "isin"
    ],
    "type": "object",
    "properties": {
      "isin": {
        "description": "ISIN (обязательный)",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "type": "string"
      },
      "edition": {
        "type": "string"
      }
    }
  },
  "Risk.NominalCurrencyResponse": {
    "type": "object",
    "properties": {
      "currency": {
        "description": "Трехбуквенный код валюты",
        "type": "string"
      },
      "error": {
        "description": "Текст ошибки, если она есть",
        "type": "string"
      }
    }
  },
  "Requests.V2.Risk.OptionParamsRequest": {
    "required": [
      "symbol"
    ],
    "type": "object",
    "properties": {
      "symbol": {
        "description": "Торговый код опциона (обязательный)",
        "type": "string"
      }
    }
  },
  "Risk.OptionParamsResponse": {
    "type": "object",
    "properties": {
      "cfiCode": {
        "description": "Код CFI",
        "type": "string"
      },
      "expirationDate": {
        "description": "Дата экспирации типа String",
        "type": "string"
      },
      "expirationDateDt": {
        "format": "date-time",
        "description": "Дата экспирации типа DateTime",
        "type": "string"
      },
      "strikePrice": {
        "format": "decimal(20,8)",
        "description": "Страйк",
        "type": "number"
      },
      "underlyingSymbol": {
        "description": "Базовый инструмент",
        "type": "string"
      },
      "error": {
        "description": "Текст ошибки, если она есть",
        "type": "string"
      }
    }
  },
  "Requests.V2.Risk.OptionValuesRequest": {
    "required": [
      "id",
      "date"
    ],
    "type": "object",
    "properties": {
      "id": {
        "description": "Идентификатор опциона (торговый код)",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата расчета",
        "type": "string"
      },
      "fields": {
        "description": "Список полей",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      }
    }
  },
  "Risk.OptionValuesFields": {
    "description": "Страйк",
    "type": "object",
    "properties": {
      "strike": {
        "format": "decimal(20,8)",
        "type": "number"
      },
      "typeopt": {
        "description": "Тип",
        "type": "string"
      },
      "expdate": {
        "format": "date-time",
        "description": "Дата экспирации",
        "type": "string"
      },
      "t": {
        "format": "decimal(20,4)",
        "description": "Срок от даты расчета до expdate в годах",
        "type": "number"
      },
      "f": {
        "format": "decimal(38,127)",
        "description": "Цена фьючерса опциона",
        "type": "number"
      },
      "futcur": {
        "description": "Валюта фьючерса",
        "type": "string"
      },
      "ba": {
        "format": "decimal(16,5)",
        "description": "Цена базового актива фьючерса",
        "type": "number"
      },
      "bacur": {
        "description": "Валюта базового актива фьючерса",
        "type": "string"
      },
      "r": {
        "format": "decimal(38,127)",
        "description": "Безрисковая ставка в валюте базового актива",
        "type": "number"
      },
      "popt": {
        "format": "decimal(38,127)",
        "description": "Теоретическая цена опциона на дату расчета",
        "type": "number"
      },
      "flot": {
        "format": "decimal(12,0)",
        "description": "Размер лота фьючерса",
        "type": "number"
      },
      "isin_ba": {
        "description": "ISIN базового актива",
        "type": "string"
      },
      "coeff_ba_f": {
        "format": "decimal(38,127)",
        "description": "Количество единиц базового актива в одном фьючерсном контракте",
        "type": "number"
      },
      "point": {
        "format": "decimal(38,127)",
        "description": "Стоимость одного пункта цены в валюте фьючерса",
        "type": "number"
      },
      "gamma": {
        "format": "decimal(38,127)",
        "type": "number"
      },
      "delta": {
        "format": "decimal(38,127)",
        "type": "number"
      },
      "vega": {
        "format": "decimal(38,127)",
        "type": "number"
      },
      "sigma": {
        "format": "decimal(38,127)",
        "type": "number"
      },
      "d1": {
        "format": "decimal(38,127)",
        "type": "number"
      }
    }
  },
  "Requests.V2.Risk.PfiParamsRequest": {
    "required": [
      "isin",
      "date"
    ],
    "type": "object",
    "properties": {
      "isin": {
        "description": "ISIN",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата (обязательный)",
        "type": "string"
      },
      "moexPriceType": {
        "type": "string"
      }
    }
  },
  "Risk.PfiParamsResponse": {
    "type": "object",
    "properties": {
      "isinBase": {
        "description": "ISIN базового актива",
        "type": "string"
      },
      "currencyCode": {
        "description": "Трехбуквенный код валюты",
        "type": "string"
      },
      "lotSize": {
        "format": "int32",
        "description": "Размер лота",
        "type": "integer"
      },
      "expirationDate": {
        "description": "Дата экспирации типа String",
        "type": "string"
      },
      "expirationDateDt": {
        "format": "date-time",
        "description": "Дата экспирации типа DateTime",
        "type": "string"
      },
      "currencyRate": {
        "format": "decimal(38,10)",
        "description": "Курс валюты к рублю",
        "type": "number"
      },
      "price": {
        "format": "decimal(16,8)",
        "description": "Цена базового актива",
        "type": "number"
      },
      "point": {
        "format": "decimal(20,8)",
        "description": "Стоимость одного пункта цены контракта в валюте контракта",
        "type": "number"
      },
      "error": {
        "description": "Текст ошибки, если она есть",
        "type": "string"
      },
      "nominal": {
        "format": "decimal(12,0)",
        "description": "Номинал ПФИ",
        "type": "number"
      },
      "marketPrice": {
        "format": "decimal(16,8)",
        "description": "Рыночная цена",
        "type": "number"
      },
      "accruedInterest": {
        "format": "decimal(16,8)",
        "description": "НКД облигации, наилучшей к поставке на дату расчета в процентах от номинала.",
        "type": "number"
      },
      "deliveryAi": {
        "format": "decimal(16,8)",
        "description": "НКД облигации, наилучшей к поставке на дату экспирации фьючерса.Процент от номинала бонда в процентах от номинала.",
        "type": "number"
      },
      "conversionFactor": {
        "format": "decimal(16,8)",
        "description": "Конверсионный коэффициент облигации, наилучшей к поставке.",
        "type": "number"
      },
      "instrumentType": {
        "format": "int32",
        "description": "Тип ПФИ:\r\n0 – фьючерс на акции или индекс\r\n1 – фьючерс на корзину облигаций\r\n2 – товарный контракт\r\n3 – валютный контракт\r\n4 – фьючерс на процентную ставку",
        "type": "integer"
      },
      "isinBaseRate": {
        "format": "decimal(38,10)",
        "description": "Курс базового актива для валютных контрактов",
        "type": "number"
      },
      "ratePeriod": {
        "description": "Дата для фьючерсов на процентную ставку",
        "type": "string"
      },
      "quotationPrice": {
        "format": "decimal(38,127)",
        "description": "Котировка ПФИ",
        "type": "number"
      },
      "basicAssetCode": {
        "description": "Код базового актива",
        "type": "string"
      },
      "riskType": {
        "description": "Тип риска",
        "type": "string"
      }
    }
  },
  "Requests.V2.Risk.RepoDiscount139Request": {
    "required": [
      "isin",
      "date"
    ],
    "type": "object",
    "properties": {
      "isin": {
        "description": "ISIN (обязательный)",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата (обязательный)",
        "type": "string"
      },
      "useFrozenDates": {
        "description": "",
        "type": "boolean"
      }
    }
  },
  "Risk.RepoDiscount139Response": {
    "type": "object",
    "properties": {
      "discount": {
        "format": "decimal(5,4)",
        "description": "Величина дисконта",
        "type": "number"
      },
      "error": {
        "description": "Текст ошибки, если она есть",
        "type": "string"
      }
    }
  },
  "Requests.V2.Risk.RiskDateRequest": {
    "required": [
      "isin",
      "date"
    ],
    "type": "object",
    "properties": {
      "isin": {
        "description": "ISIN (обязательный)",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата (обязательный)",
        "type": "string"
      },
      "offerEnable": {
        "type": "boolean"
      },
      "edition": {
        "description": "",
        "type": "string"
      },
      "endDate": {
        "format": "date-time",
        "description": "Дата истечения позиции (необязательный)",
        "type": "string"
      }
    }
  },
  "Risk.RiskDateResponse": {
    "type": "object",
    "properties": {
      "date": {
        "format": "date-time",
        "description": "Дата для вычисления группы срочности",
        "type": "string"
      },
      "rule": {
        "description": "Идентификатор правила:\r\nISSUE_MATURITY – погашение\r\nISSUE_RATE – купон\r\nISSUE_DIVIDEND – дивиденды",
        "type": "string"
      },
      "hasAmortisations": {
        "description": "Наличие амортизации",
        "type": "boolean"
      },
      "error": {
        "description": "Текст ошибки, если она есть",
        "type": "string"
      },
      "timingGroupId": {
        "format": "int32",
        "description": "Идентификатор группы срочности",
        "type": "integer"
      },
      "timingGroupName": {
        "description": "Наименование группы срочности",
        "type": "string"
      },
      "ruleName": {
        "description": "Наименование правила",
        "type": "string"
      }
    }
  },
  "Requests.V2.Risk.RiskGroupRequest": {
    "required": [
      "isin",
      "date"
    ],
    "type": "object",
    "properties": {
      "isin": {
        "description": "ISIN (обязательный)",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата (обязательный)",
        "type": "string"
      },
      "funding": {
        "format": "int32",
        "description": "1 – фондирование в валюте номинала. По умолчанию 0.",
        "type": "integer"
      },
      "offerEnable": {
        "type": "boolean"
      },
      "useFrozenDates": {
        "type": "boolean"
      },
      "edition": {
        "description": "Редакция",
        "type": "string"
      },
      "cbrInstructions": {
        "description": "Параметры инструкций ЦБ РФ:\r\n- vlaEdition - для положений \"Положение о порядке расчета показателя краткосрочной ликвидности\"\r\n- marketRiskEdition - для положений \"О порядке расчета кредитными организациями величины рыночного риска\"\r\n- bankNormEdition - для положений \"Об обязательных нормативах банков\"",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Requests.V2.NameValuePair"
        }
      },
      "positionOpenDate": {
        "format": "date-time",
        "description": "Дата открытия (покупки) позиции",
        "type": "string"
      }
    }
  },
  "Risk.RiskGroupResponse": {
    "type": "object",
    "properties": {
      "group": {
        "format": "int32",
        "description": "Идентификатор группы риска:\r\n-1\tгруппа риска не применима \r\n1\tбез риска\r\n2\tнизкий риск (&lt;6 мес)\r\n3\tнизкий риск (6-24 мес)\r\n4\tнизкий риск (&gt;24 мес)\r\n5\tсредний риск\r\n6\tвысокий риск\r\n7\tнизкий риск (амортизация)\r\n10\tнизкий риск (секьюритизация)\r\n11\tниже среднего (секьюритизация)\r\n12\tсредний (секьюритизация)\r\n13\tвыше среднего (секьюритизация)\r\n14\tвысокий риск (секьюритизация)",
        "type": "integer"
      },
      "error": {
        "description": "Текст ошибки, если она есть",
        "type": "string"
      },
      "coef511SPR": {
        "format": "decimal(5,4)",
        "description": "Коэффициент специального процентного риска",
        "type": "number"
      }
    }
  },
  "Requests.V2.Risk.RiskGroupParamRequest": {
    "required": [
      "isin",
      "date",
      "paramName"
    ],
    "type": "object",
    "properties": {
      "isin": {
        "description": "ISIN (обязательный)",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата (обязательный)",
        "type": "string"
      },
      "paramName": {
        "description": "Код параметра, см. Приложение 1 (обязательный)",
        "type": "string"
      },
      "offerEnable": {
        "type": "boolean"
      },
      "useFrozenDates": {
        "type": "boolean"
      },
      "edition": {
        "type": "string"
      }
    }
  },
  "Risk.RiskGroupParamResponse": {
    "type": "object",
    "properties": {
      "param": {
        "description": "Значение параметра",
        "type": "string"
      },
      "error": {
        "description": "Текст ошибки, если она есть",
        "type": "string"
      }
    }
  },
  "Risk.RiskGroupParamsRequest": {
    "required": [
      "isin",
      "date"
    ],
    "type": "object",
    "properties": {
      "isin": {
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "type": "string"
      },
      "params": {
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "offerEnable": {
        "type": "boolean"
      },
      "useFrozenDates": {
        "type": "boolean"
      },
      "edition": {
        "type": "string"
      }
    }
  },
  "Risk.RiskGroupParamsFields": {
    "type": "object",
    "properties": {
      "param_name": {
        "type": "string"
      },
      "param": {
        "type": "string"
      },
      "error": {
        "type": "string"
      }
    }
  },
  "Requests.V2.Risk.RiskGroupRuleRequest": {
    "required": [
      "isin",
      "date"
    ],
    "type": "object",
    "properties": {
      "isin": {
        "description": "ISIN (обязательный)",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата (обязательный)",
        "type": "string"
      },
      "funding": {
        "format": "int32",
        "description": "1 – фондирование в валюте номинала. По умолчанию 0.",
        "type": "integer"
      },
      "offerEnable": {
        "type": "boolean"
      },
      "useFrozenDates": {
        "type": "boolean"
      },
      "edition": {
        "description": "Реадакция",
        "type": "string"
      },
      "cbrInstructions": {
        "description": "Параметры инструкций ЦБ РФ:\r\n- vlaEdition - для положений \"Положение о порядке расчета показателя краткосрочной ликвидности\"\r\n- marketRiskEdition - для положений \"О порядке расчета кредитными организациями величины рыночного риска\"\r\n- bankNormEdition - для положений \"Об обязательных нормативах банков\"",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Requests.V2.NameValuePair"
        }
      },
      "positionOpenDate": {
        "format": "date-time",
        "description": "Дата открытия (покупки) позиции",
        "type": "string"
      }
    }
  },
  "Risk.RiskGroupRuleResponse": {
    "type": "object",
    "properties": {
      "rule": {
        "description": "Идентификатор правила",
        "type": "string"
      },
      "error": {
        "description": "Текст ошибки, если она есть",
        "type": "string"
      }
    }
  },
  "Requests.V2.Risk.Rule139Request": {
    "required": [
      "isin",
      "date"
    ],
    "type": "object",
    "properties": {
      "isin": {
        "description": "ISIN (обязательный)",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата (обязательный)",
        "type": "string"
      },
      "funding": {
        "description": "1 – фондирование в валюте номинала. По умолчанию 0.",
        "type": "boolean"
      },
      "useFrozenDates": {
        "type": "boolean"
      }
    }
  },
  "Risk.Rule139Response": {
    "type": "object",
    "properties": {
      "rule": {
        "description": "Идентификатор правила",
        "type": "string"
      },
      "nonGarantRule": {
        "description": "Правило классификации актива для негарантированной части выпуска.",
        "type": "string"
      },
      "error": {
        "description": "Текст ошибки, если она есть",
        "type": "string"
      },
      "ruleCoef": {
        "format": "decimal(2,1)",
        "type": "number"
      },
      "nonGarantRuleCoef": {
        "format": "decimal(2,1)",
        "type": "number"
      }
    }
  },
  "Requests.V2.Risk.Rule421Request": {
    "required": [
      "isin",
      "date"
    ],
    "type": "object",
    "properties": {
      "isin": {
        "description": "ISIN (обязательный)",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата (обязательный)",
        "type": "string"
      },
      "useFrozenDates": {
        "description": "TRUE - использовать даты рейтингов",
        "type": "boolean"
      },
      "bBCountry": {
        "description": "Двухбуквенный код страны филиала банка (Alfa-2), например, KZ (необязательный), по умолчанию = RU.",
        "type": "string"
      },
      "vla_edition": {
        "description": "Редакция ВЛА",
        "type": "string"
      }
    }
  },
  "Risk.Rule421Response": {
    "type": "object",
    "properties": {
      "rule": {
        "description": "Идентификатор правила",
        "type": "string"
      },
      "error": {
        "description": "Текст ошибки, если она есть",
        "type": "string"
      },
      "daysAfterBreakingRule": {
        "format": "int32",
        "description": "Количество дней, прошедшее с момента прекращения выполнения правила",
        "type": "integer"
      }
    }
  },
  "Requests.V2.Risk.VarDataRequest": {
    "required": [
      "id"
    ],
    "type": "object",
    "properties": {
      "id": {
        "description": "(обязательный) Идентификатор инструмента может принимать значения: \r\nISIN\r\nCUR – трехбуквенный код валюты(ОКВ Alfa-3), \r\nID_ISS – внутренний идентификатор ЭФИР",
        "type": "string"
      },
      "date": {
        "format": "date-time",
        "description": "Дата расчета",
        "type": "string"
      },
      "alpha": {
        "format": "double",
        "description": "Доверительный уровень (confidence level) в %",
        "type": "number"
      },
      "t_var": {
        "format": "int32",
        "description": "Временной горизонт риска в днях. Обычно, 10 дней.",
        "type": "integer"
      },
      "fields": {
        "description": "Названия и порядок значений (полей), возвращаемых функцией",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "modelId": {
        "format": "int64",
        "description": "Номер расчетной модели.\r\nПо-умолчанию, используется активная модель.",
        "type": "integer"
      },
      "curRisk": {
        "format": "int32",
        "description": "Признак учета риска в ОВП. Значения 0 или 1.",
        "type": "integer"
      },
      "lastKnownData": {
        "description": "True - возвращает данные за последний расчитанный день",
        "type": "boolean"
      }
    }
  },
  "Risk.VarDataResponse": {
    "type": "object",
    "properties": {
      "typeRF": {
        "format": "int32",
        "description": "Тип фактора риска инструмента (0 – облигации, 1 – валюты, 2 - акции)",
        "type": "integer"
      },
      "rf": {
        "format": "int64",
        "description": "Фактор риска инструмента",
        "type": "integer"
      },
      "cur": {
        "description": "Код валюты. Если входной инструмент – валюта, то CUR = ID.",
        "type": "string"
      },
      "type_RFC": {
        "format": "int32",
        "description": "Тип фактора риска валюты (0-2)",
        "type": "integer"
      },
      "rfc": {
        "format": "int64",
        "description": "Фактор риска валюты (1-29)",
        "type": "integer"
      },
      "rO_ISIN": {
        "format": "double",
        "description": "Множитель риска по инструменту",
        "type": "number"
      },
      "rO_CUR": {
        "format": "double",
        "description": "Множитель риска по валюте",
        "type": "number"
      },
      "sigma_RF": {
        "format": "double",
        "description": "Волатильность фактора риска инструмента",
        "type": "number"
      },
      "sigma_RFC": {
        "format": "double",
        "description": "Волатильность фактора риска валюты",
        "type": "number"
      },
      "cor_RF_RFC": {
        "format": "double",
        "description": "Коэффициент корреляции между факторами риска инструмента и валюты(из корреляционной матрицы)",
        "type": "number"
      },
      "vaR_mult": {
        "format": "double",
        "description": "Множитель VaR с учетом временного горизонта прогноза",
        "type": "number"
      },
      "eS_mult": {
        "format": "double",
        "description": "Множитель ES с учетом временного горизонта прогноза",
        "type": "number"
      },
      "unit_ISIN": {
        "format": "double",
        "description": "Множитель риска на единицу позиции (составляющая по инструменту)",
        "type": "number"
      },
      "unit_CUR": {
        "format": "double",
        "description": "Множитель риска на единицу позиции (составляющая по валюте)",
        "type": "number"
      },
      "error": {
        "description": "Текст ошибки, если она произошла",
        "type": "string"
      }
    }
  },
  "Requests.V2.Risk.VarMatrixRequest": {
    "type": "object",
    "properties": {
      "date": {
        "format": "date-time",
        "description": "(необязательный) Дата расчета. Если не указан, то используется текущая дата.",
        "type": "string"
      },
      "modelId": {
        "format": "int64",
        "description": "Идентификотор модели расчета. Если не указан будет использоваться активная модель.",
        "type": "integer"
      }
    }
  },
  "Risk.VarMatrixResponse": {
    "description": "VaR correlation/covariation mattrix",
    "type": "object",
    "properties": {
      "elements": {
        "description": "Mассив объектов класса VarMatrixElement",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "$ref": "Risk.VarMatrixElement"
        }
      },
      "error": {
        "description": "Текст ошибки, если она произошла",
        "type": "string"
      }
    }
  },
  "Risk.VarMatrixElement": {
    "description": "Элемент VaR матрицы со значениями ковариации и корреляции",
    "type": "object",
    "properties": {
      "modelId": {
        "format": "int64",
        "description": "Идентификотор модели расчета",
        "type": "integer"
      },
      "date": {
        "format": "date-time",
        "description": "Дата расчета",
        "type": "string"
      },
      "first": {
        "description": "Имя фактора риска первого столбца/колонки матрицы",
        "type": "string"
      },
      "firstType": {
        "format": "int32",
        "description": "Тип фактора риска первого столбца/колонки матрицы: \r\n0 – облигации\r\n1 – валюты \r\n2 - акции",
        "type": "integer"
      },
      "second": {
        "description": "Имя фактора риска второго столбца/колонки матрицы",
        "type": "string"
      },
      "secondType": {
        "format": "int32",
        "description": "Тип фактора риска второго столбца/колонки матрицы",
        "type": "integer"
      },
      "emAcov": {
        "format": "double",
        "description": "Значение ковариации факторов риска",
        "type": "number"
      },
      "cor": {
        "format": "double",
        "description": "Значение корреляции факторов риска",
        "type": "number"
      }
    }
  },
  "Requests.V2.RUPrice.GetHistoryRequest": {
    "type": "object",
    "properties": {
      "ids": {
        "description": "(Необязательный) Список идентификаторов инструментов (любой из ISIN, регистрационный номер, код НРД, FintoolID)\r\nОграничение – если ids не задан, то возвратятся данные максимум за один месяц (от dateFrom до dateFrom + 1 месяц).",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "fields": {
        "description": "(Необязательный) Список кодов необходимых полей (см. метод HistoryColumns, CODENAME). Если не задано, то вернутся все поля.",
        "uniqueItems": false,
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "dateFrom": {
        "format": "date-time",
        "description": "Дата начала периода",
        "type": "string"
      },
      "dateTo": {
        "format": "date-time",
        "description": "Дата окончания периода. Может совпадать с dateFrom, если требуются данные за один день.",
        "type": "string"
      },
      "version": {
        "format": "int32",
        "description": "Версия методики: 0 - Обе методики; 1 - Методика НФА (старая); 2, null или не указан - Методика ЦЦ НРД (новая);",
        "enum": [
          0,
          1,
          2
        ],
        "type": "integer"
      }
    }
  },
  "RUPrice.HistoryFields": {
    "type": "object",
    "properties": {
      "nickname": {
        "description": "Код НРД",
        "type": "string"
      },
      "fintoolid": {
        "format": "int64",
        "description": "Уникальный идентификатор инструмента",
        "type": "integer"
      },
      "fininstid": {
        "format": "int64",
        "description": "Уникальный идентификатор эмитента",
        "type": "integer"
      },
      "isincode": {
        "description": "ISIN-код выпуска облигаций",
        "type": "string"
      },
      "regcode": {
        "description": "Регистрационный номер выпуска облигаций",
        "type": "string"
      },
      "nrdcode": {
        "description": "Депозитарный код НРД",
        "type": "string"
      },
      "calcdate": {
        "format": "date-time",
        "description": "Дата оценки",
        "type": "string"
      },
      "val_date": {
        "format": "date-time",
        "description": "Последняя дата, на которую проводилась оценка инструмента",
        "type": "string"
      },
      "current_fv": {
        "format": "double",
        "description": "Текущий номинал облигации на датe оценки в валюте номинала",
        "type": "number"
      },
      "faceftname": {
        "description": "Код (alpha-3) валюты номинала облигации",
        "type": "string"
      },
      "date_agg": {
        "format": "date-time",
        "description": "Дата (возможного) погашения - по ближайшей оферте, а если нет активной оферты, то по погашению",
        "type": "string"
      },
      "avge_prce": {
        "format": "double",
        "description": "Средневзвешенная (по объему) цена по основной площадке на дату оценки",
        "type": "number"
      },
      "yield_agg": {
        "format": "double",
        "description": "Доходность облигации по средневзвешенной цене",
        "type": "number"
      },
      "z_wa_mb": {
        "format": "double",
        "description": "Z-спред по средневзвешенной цене текущего торгового дня к безрисковой кривой Мосбиржи",
        "type": "number"
      },
      "durmod_agg": {
        "format": "double",
        "description": "Модифицированная дюрация (лет), рассчитанная по Yield_agg",
        "type": "number"
      },
      "i_wa_mb": {
        "format": "double",
        "description": "I-спред (разность доходности и g-кривой в точке дюрации) по средневзвешенной цене к безрисковой кривой Мосбиржи",
        "type": "number"
      },
      "method_no": {
        "format": "double",
        "description": "Номер метода, выбранный для определения справедливой стоимости облигации",
        "type": "number"
      },
      "vp_pct": {
        "format": "double",
        "description": "Справедливая стоимость облигации (в % от номинала) на дату расчета",
        "type": "number"
      },
      "vp_pc": {
        "format": "double",
        "description": "Справедливая стоимость облигации (в валюте номинала) на дату расчета",
        "type": "number"
      },
      "vp_pc_l": {
        "format": "double",
        "description": "Нижняя граница доверительного интервала допустимых значений цены (уровень доверия 95%)",
        "type": "number"
      },
      "vp_pc_h": {
        "format": "double",
        "description": "Верхняя граница доверительного интервала допустимых значений цены (уровень доверия 95%)",
        "type": "number"
      },
      "vp_m1": {
        "format": "double",
        "description": "Справедливая стоимость облигации (в % от номинала), рассчитанная 1-м методом (фактических цен)",
        "type": "number"
      },
      "y_agg_m1": {
        "format": "double",
        "description": "Оценка доходности облигации, основанная на методе №1",
        "type": "number"
      },
      "deal_250d": {
        "format": "double",
        "description": "Количество биржевых сделок с облигацией за последние 250 торговых дней",
        "type": "number"
      },
      "q_m1": {
        "format": "double",
        "description": "Пороговый уровень достоверности котировки, необходимый для признания ее достоверной",
        "type": "number"
      },
      "r_m1": {
        "format": "double",
        "description": "Точность оценки (R1) справедливой стоимости облигации на основе метода №1 (фактических цен)",
        "type": "number"
      },
      "vp_m2": {
        "format": "double",
        "description": "Справедливая стоимость облигации (в % от номинала), рассчитанная 2-м методом (экстраполяции индексов)",
        "type": "number"
      },
      "y_agg_m2": {
        "format": "double",
        "description": "Оценка доходности облигации, основанная на методе №2",
        "type": "number"
      },
      "i_vp_m2": {
        "format": "double",
        "description": "Оценка i-спреда облигации, основанная на методе №2",
        "type": "number"
      },
      "sigma_m2": {
        "format": "double",
        "description": "Волатильность доходности облигации",
        "type": "number"
      },
      "index": {
        "description": "Код индекса, к которому привязан инструмент в рамках модели №2",
        "type": "string"
      },
      "beta1_m2": {
        "format": "double",
        "description": "Коэффициент модели коинтеграции коэффициент для значения индекса(коэффициент beta1 одинаков для всех облигаций, связанных с индексом)",
        "type": "number"
      },
      "beta0_m2": {
        "format": "double",
        "description": "Коэффициент модели коинтеграции \"свободный член\"",
        "type": "number"
      },
      "alpha_m2": {
        "format": "double",
        "description": "Коэффициент модели коррекции ошибок \"alpha\"",
        "type": "number"
      },
      "gamma_m2": {
        "format": "double",
        "description": "Коэффициент модели коррекции ошибок \"gamma\"",
        "type": "number"
      },
      "sigma_nu": {
        "format": "double",
        "description": "Коэффициент модели коррекции ошибок - стандартное отклонение нормального распределения \"nu\"",
        "type": "number"
      },
      "rho_m2": {
        "format": "double",
        "description": "Параметр \"rho\", который связывает точность сделки c мерой достоверности",
        "type": "number"
      },
      "r_m2": {
        "format": "double",
        "description": "Точность оценки (R2) справедливой стоимости облигации на основе метода экстраполяции индексов",
        "type": "number"
      },
      "vp_m3": {
        "format": "double",
        "description": "Справедливая стоимость облигации(в % от номинала), рассчитанная 3-м методом (факторного разложения)",
        "type": "number"
      },
      "y_agg_m3": {
        "format": "double",
        "description": "Оценка доходности облигации, основанная на методе №3 (факторного разложения)",
        "type": "number"
      },
      "dur_agg_m3": {
        "format": "double",
        "description": "Оценка дюрации облигации (по Маколею, в годах), основанная на методе №3 (факторного разложения)",
        "type": "number"
      },
      "z_vp_m3": {
        "format": "double",
        "description": "Оценка z-спреда облигации, основанная на методе №3",
        "type": "number"
      },
      "r_m3": {
        "format": "double",
        "description": "Точность оценки (R3) справедливой стоимости облигации на основе метода №3 (факторного разложения)",
        "type": "number"
      },
      "factor1": {
        "format": "double",
        "description": "Значение первого фактора Фамы-Френча, характеризующего наклон кривой базовых ставок",
        "type": "number"
      },
      "beta1_m3": {
        "format": "double",
        "description": "Коэффициент регрессии \"beta1\" для первого фактора Фамы-Френча",
        "type": "number"
      },
      "factor2": {
        "format": "double",
        "description": "Значение второго фактора Фамы-Френча, характеризующего средний уровень кредитного риска корпоративных облигаций",
        "type": "number"
      },
      "beta2_m3": {
        "format": "double",
        "description": "Коэффициент регрессии \"beta2\" для второго фактора Фамы-Френча",
        "type": "number"
      },
      "level_pd": {
        "format": "double",
        "description": "Значение уровня вероятности дефолта, используемого в расчете величины премии за кредитный риск",
        "type": "number"
      },
      "coef_b": {
        "format": "double",
        "description": "Коэф-т \"b\", определяющий зависимость вероятность дефолта от уровня кредитного рейтинга",
        "type": "number"
      },
      "risk_b": {
        "format": "double",
        "description": "Фактор, характеризующий премию за кредитный риск (вероятность дефолта до погашения облигации)",
        "type": "number"
      },
      "beta3_m3": {
        "format": "double",
        "description": "Коэф-т \"beta3\" линейной регрессии для фактора кредитного риска",
        "type": "number"
      },
      "is_ontherun": {
        "format": "double",
        "description": "Переменная \"on the run\", принимающая значения 1 или 0 в зависимости от того, размещался ли выпуск недавно или давно",
        "type": "number"
      },
      "beta4_m3": {
        "format": "double",
        "description": "Коэффициент регрессии \"beta4\" для показателя \"on the run\"",
        "type": "number"
      },
      "hhi": {
        "format": "double",
        "description": "Значение индекса Херфиндаля-Хиршмана для структуры владения облигацией",
        "type": "number"
      },
      "beta5_m3": {
        "format": "double",
        "description": "Коэффициент регрессии \"beta5\" для индекса Херфиндаля-Хиршмана",
        "type": "number"
      },
      "ind_liq": {
        "format": "double",
        "description": "Индекс ликвидности (IL), показывающий средний уровень значения индекса Херфиндаля-Хиршмана в портфеле «типичного» инвестора данной облигации",
        "type": "number"
      },
      "beta6_m3": {
        "format": "double",
        "description": "Коэффициент регрессии \"beta6\" для индекса ликвидности \"IL\"",
        "type": "number"
      },
      "ind_unliq": {
        "format": "double",
        "description": "Индекс ликвидности (IL4), показывающий средний уровень для \"неликвидных\" бумаг в портфеле «типичного» инвестора данной облигации",
        "type": "number"
      },
      "beta7_m3": {
        "format": "double",
        "description": "Коэффициент регрессии \"beta7\" для индекса ликвидности \"IL4\"",
        "type": "number"
      },
      "sector": {
        "description": "Сектор эмитента, согласно классификации Интерфакс",
        "type": "string"
      },
      "phi_sector": {
        "format": "double",
        "description": "Коэффициент регрессии \"phi\" для сектора эмитента",
        "type": "number"
      },
      "version": {
        "format": "int32",
        "description": "Версия методики:  0 - Обе методики; 1 - Методика НФА (старая); 2 - Методика ЦЦ НРД (новая);",
        "enum": [
          0,
          1,
          2
        ],
        "type": "integer"
      },
      "valuation_currency": {
        "description": "Валюта оценки",
        "type": "string"
      },
      "security_type": {
        "description": "Тип бумаги",
        "type": "string"
      },
      "id": {
        "type": "string"
      },
      "no_history_found": {
        "format": "double",
        "type": "number"
      },
      "not_valid_code": {
        "format": "double",
        "type": "number"
      },
      "calcDateTime": {
        "format": "date-time",
        "type": "string"
      }
    }
  },
  "RUPrice.HistoryColumnGroupsFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int32",
        "description": "Идентификатор группы",
        "type": "integer"
      },
      "codename": {
        "description": "Символьный код группы",
        "type": "string"
      },
      "shortname_rus": {
        "description": "Короткое имя на русском",
        "type": "string"
      },
      "fullname_rus": {
        "description": "Полное имя на русском",
        "type": "string"
      },
      "sort_order": {
        "format": "int32",
        "description": "Порядок сортировки (для удобства UI)",
        "type": "integer"
      }
    }
  },
  "Requests.V2.RUPrice.HistoryColumnsRequest": {
    "type": "object",
    "properties": {
      "filter": {
        "description": "Строка фильтрации (необязательный)",
        "type": "string"
      },
      "count": {
        "format": "int32",
        "description": "Макимальное возвращаемое количество записей.\r\nЕсли для count задано значение 0 или его присвоение отсутствует, то возвращается 1000 записей.\r\nЧтобы получить все записи, надо указать заведомо большее возвращаемое число записей. Например: 1000000.",
        "type": "integer"
      }
    }
  },
  "RUPrice.HistoryColumnsFields": {
    "type": "object",
    "properties": {
      "id": {
        "format": "int32",
        "description": "Идентификатор поля",
        "type": "integer"
      },
      "id_group": {
        "format": "int32",
        "description": "Идентификатор группы",
        "type": "integer"
      },
      "codename": {
        "description": "Символьный код поля",
        "type": "string"
      },
      "shortname_rus": {
        "description": "Короткое имя на русском",
        "type": "string"
      },
      "fullname_rus": {
        "description": "Полное название на русском",
        "type": "string"
      },
      "shortname_nrd": {
        "description": "Наименование поля в НРД",
        "type": "string"
      },
      "field_remark": {
        "description": "Примечание (ссылка на методику)",
        "type": "string"
      },
      "sort_order": {
        "format": "int32",
        "description": "Порядок сортировки (для удобства UI)",
        "type": "integer"
      },
      "shortname_eng": {
        "description": "Короткое имя на английском",
        "type": "string"
      },
      "fullname_eng": {
        "description": "Полное название на английском",
        "type": "string"
      }
    }
  },
  "Requests.V2.RUPrice.SecuritiesRequest": {
    "type": "object",
    "properties": {
      "actual_date": {
        "format": "date-time",
        "description": "дата актуальности справочника, если NULL, то выводится справочник, актуальный на текущую дату",
        "type": "string"
      },
      "version": {
        "format": "int32",
        "description": "версия справочника, 1 - старая методика; 2 - новая методика; 0 или NULL - обе методики",
        "type": "integer"
      }
    }
  },
  "RUPrice.SecuritiesFields": {
    "type": "object",
    "properties": {
      "actual_date": {
        "format": "date-time",
        "description": "Дата актуальности справочника",
        "type": "string"
      },
      "version": {
        "format": "int32",
        "description": "Версия справочника, 1 - старая методика; 2 - новая методика;",
        "type": "integer"
      },
      "fintoolid": {
        "format": "int64",
        "description": "Идентификатор выпуска бумаги",
        "type": "integer"
      },
      "isin": {
        "description": "ISIN инструмента",
        "type": "string"
      },
      "regcode": {
        "description": "Регистрационный код",
        "type": "string"
      },
      "nrd_code": {
        "description": "Код инструмента в НРД",
        "type": "string"
      },
      "shortname_rus": {
        "description": "Краткое наименование выпуска",
        "type": "string"
      },
      "issueruid": {
        "format": "int64",
        "description": "УИН оператора в БД Интерфакс (fininstid)",
        "type": "integer"
      },
      "borroweruid": {
        "format": "int64",
        "description": "УИН реального заемщика (эмитента) в БД Интерфакс (fininstid)",
        "type": "integer"
      },
      "id_iss": {
        "format": "int64",
        "description": "Идентификатор торгового инструмента в базе Интерфакс (для version=1)",
        "type": "integer"
      }
    }
  }
}

export {controllersArr, models};