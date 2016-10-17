using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ConsoleApplication6
{
    class Aeroplane
    {
        int aircraft_capacity;
        protected string location;
        protected string destination;
        bool weather_condition = false;
        protected int arrival_time, leaving_time;

        public int speed;
        public int aircraft_capacity;
        public int time;
        public float amount;
        public int fuel_factor;

        public Aeroplane(string _location, string _destination)
        {
            this.location = _location;
            this.destination = _destination;
        }

        void weather_confirmation()
        {
            if (weather_condition != false)
                Console.Write("Aeroplane fit to travel");
            else Console.Write("Travel schedule to be postponed");
        }
    }

    class Boeing_747 : Aeroplane 
    {
        public Boeing_747(string _location, string _destination, int leave, int arrive): base(_location,_destination) 
        {
            this.arrival_time = arrive;
            this.leaving_time = leave;
        }

        float journey_time_estimate(int distance)
        {
            time = distance / speed;
            return time;
        }

        float flight_amount(int distance) 
        {
            return amount = journey_time_estimate(distance) * fuel_factor;
        }

    }
    class AirBus_A300 : Aeroplane 
    {
        public AirBus_A300(string _location, string _destination, int leave, int arrive): base(_location,_destination) 
        {
            this.arrival_time = arrive;
            this.leaving_time = leave;
        }
        float journey_time_estimate(int distance)
        {
            time = distance / speed;
            return time;
        }

        float flight_amount(int distance) 
        {
            return amount = journey_time_estimate(distance) * fuel_factor;
        }

    }
}
