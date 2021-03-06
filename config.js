export default
{
    "scene":{
        "background":"0x4f6f8f"
    },
    "glb_model":"./3d_models/home.glb",
    "glTF_model":"./3d_models/home.gltf",
    "mouse":{
        click_hold_delay_ms : 600
    },
    "control":{
        "file":"./3d_models/configurator.gltf",
        "name":"slider",
        "space_range":3,
        "screen_move_sensitivity":150.0,
        "is_bullet_centered_not_slider":true,
        "sliderPos_CamToObj_ratio":0.3,
        "sliderScale_ToObj_ratio":2
    },
    "stats":{
        "enabled_by_default":true
    },
    "hue":{
        "enabled":true,
        "slider_timer_ms":100,
        "poll_interval_ms":2000,
        "test_hsl":false
    },
    "mqtt":{
        "enabled":true
    },
    "effects":{
        "lights_toon_material":false,
        "outline":{
            "enabled":true,
            "show_gui":false,
            "visibleEdgeColor":"#004107",
            "hiddenEdgeColor":"#39160b"
        }
    }
}
